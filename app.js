const 
  express = require('express'),
  cors = require('cors'),
  userRoutes = require('./routes/userRoutes'),
  { sequelize } = require('./models'),
  app = express();

  app.use(express.json());

  sequelize.sync({force:false}).then(() => {
    console.log("Database synced!");
  })
  .catch(err => {
    console.log("Error syncing database:", err);
  });

  // enable cors for all routes
  // cors is responsible for what host origin is allowed to make requests
  app.use(cors({
    origin: ['http://localhost:3001', 'http://localhost:3000'],  // Only allow this origin
    methods: ['GET', 'POST', 'DELETE', 'PATCH'],         // Allow specific HTTP methods
    allowedHeaders: ['Content-Type']   // Allow specific headers
  }))

  app.use('/api', userRoutes)

  app.listen(3000)