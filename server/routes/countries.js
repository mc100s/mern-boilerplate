var express = require('express');
const Country = require('../models/country')

var router = express.Router();


router.get('/', function(req, res, next) {
  Country.find()
    .then(countries => {
      res.json(countries);
    })
    .catch(err => next(err))
});

router.post('/', function(req, res, next) {
  let {name, capitals, area, description} = req.body
  Country.create({name, capitals, area, description})
    .then(country => {
      res.json({
        success: true,
        country
      });
    })
    .catch(err => next(err))
});

module.exports = router;
