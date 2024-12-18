const 
  express = require('express'),
  router = express.Router(),
  { Op } = require('sequelize'),
  db  = require('../models/index');


module.exports.findOrCreate = async (profile) => {
}