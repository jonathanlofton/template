const 
  express = require('express'),
  router = express.Router(),
  { isAuthentiated } = require('../routes/authMiddleware'),
  db  = require('../models/index');

router.get('/users', isAuthentiated, async (req, res, next) => {
  try {
    console.log(`get | users`)
    let users = await db.User.findAll()
    return res.json({ users })
  } catch(err) {
    console.error(`get | users | Error: ${err.message}`)
    next(err)
  }
});

router.post('/users', async (req, res, next) => {
  try {
    let {body} = req;
    console.log(`post | users | creating new user... ${body.email}`)
    let user = await db.User.create(body)
    return res.json({ user })
  } catch(err) {
    console.error(`post | users | Error: ${err.message}`)
    next(err)
  }
});

router.delete('/user/:id', async (req, res, next) => {
  try {
    let {params} = req;
    let id = params.id;
    console.log(`delete | user | deleting user... ${id}`)
    await db.User.destroy({where: {id}})
    return res.json({ message: `Successfully deleted user: ${id}` })
  } catch(err) {
    console.error(`delete | user | Error: ${err.message}`)
    next(err)
  }
});

module.exports = router;