const 
  express = require('express'),
  router = express.Router(),
  { Op } = require('sequelize'),
  db  = require('../models/index');


module.exports.findOrCreate = async (profile) => {
  try {
    console.log(`get | users`)
    let user = await db.User.findAll({where: {
      email: {[Op.in]: profile.emails.map(u => u.value)}
    }})

    if (!user.length) {
      user = await db.User.create({
        first_name: profile.name.givenName,
        last_name: profile.name.familyName,
        email: profile.emails[0].value
      })
    }

    return user;
  } catch(err) {
    console.error(`findOrCreate | users | Error: ${err.message}`)
  }
}