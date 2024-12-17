const 
  express = require('express'),
  router = express.Router(),
  { Op } = require('sequelize'),
  db  = require('../models/index');


module.exports.findOrCreate = async (profile) => {
  try {
    console.log(`get | users`)
    let user = await db.User.findAll({where: {
      [Op.in]: profile.emails
    }})

    if (!user) {
      user = await db.User.create({
        first_name: profile.first_name,
        last_name: profile.last_name,
        email: profile.emails
      })
    }

    return user;
  } catch(err) {
    console.error(`get | users | Error: ${err.message}`)
  }
}