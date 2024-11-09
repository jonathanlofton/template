const 
  express = require('express'),
  cors = require('cors'),
  db  = require('./models/index'),
  { sequelize } = require('./models'),
  app = express();

  sequelize.sync({force:false}).then(() => {
    console.log("Database synced!");
  })
  .catch(err => {
    console.log("Error syncing database:", err);
  });

  // enable cors for all routes
  // cors is responsible for what host origin is allowed to make requests
  app.use(cors({
    origin: ['http://localhost:3001', 'http://localhost:3002'],  // Only allow this origin
    methods: ['GET', 'POST'],         // Allow specific HTTP methods
    allowedHeaders: ['Content-Type']   // Allow specific headers
  }))

  // TODO: move routes to seperate directories
  app.get('/users', async (req, res, next)  => {
    try {
      let users = await db.User.findAll()
      return res.json({ users })
    } catch(err) {
      console.error(`get | users | something went wrong...`)
      next(err)
    }
  })

  app.listen(3000)