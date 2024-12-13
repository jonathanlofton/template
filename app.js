require('dotenv').config()

const 
  express = require('express'),
  passport = require('passport'),
  cors = require('cors'),
  userRoutes = require('./routes/userRoutes'),
  usersController = require('./controllers/users'),
  { sequelize } = require('./models'),
  GoogleStrategy = require('passport-google-oauth20').Strategy,
  session = require('express-session');

  app = express();

  app.use(express.json());

  // enable cors for all routes
  // cors is responsible for what host origin is allowed to make requests
  app.use(cors({
    origin: ['http://localhost:3001', 'http://localhost:3000'],  // Only allow this origin
    methods: ['GET', 'POST', 'DELETE', 'PATCH'],         // Allow specific HTTP methods
    allowedHeaders: ['Content-Type'],
    credentials: true
  }))

  // have the secret be in the .env file
  app.use(session({
    secret: process.env.SESSION_SECRET || 'fallback_secret_key',
    resave: false,
    saveUninitialized: false,
    cookie: { 
      secure: process.env.NODE_ENV === 'PROD', // use secure cookies in production
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
  }));

  app.use(passport.initialize());

  app.use(passport.session());

  sequelize.sync({force:false}).then(() => {
    console.log("Database synced!");
  })
  .catch(err => {
    console.log("Error syncing database:", err);
  });

  // Passport Google Strategy Configuration
  passport.use(new GoogleStrategy({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback",
      // passReqToCallback: true
    },
    function(accessToken, refreshToken, profile, done) {
      // Here you would typically find or create a user in your database
      // TODO: find or create user and log them in...
      usersController.findOrCreate(profile).then(function (user) {
        return done(null, user);
      })
    }
  ));

  // Serialization for sessions
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((userId, done) => {
    usersController.findById(userId).then(user => {
      done(null, user);
    })
  });

  // Authentication Routes
  app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  );

  app.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: 'http://localhost:3001/login' }),
    (req, res) => {
      // Successful authentication, redirect home.
      res.redirect('http://localhost:3001/users');
    }
  );

  app.get('/auth/logout', (req, res) => {
    req.logout();
    res.redirect('http://localhost:3001/login');
  });

  // Endpoint to get current user
  app.get('/current_user', (req, res) => {
    res.json(req.user || null);
  });

  app.use('/api', userRoutes)

  app.listen(3000)