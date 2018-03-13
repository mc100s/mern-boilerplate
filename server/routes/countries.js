var express = require('express');
const Country = require('../models/country')

var router = express.Router();

// Route to get all countries
router.get('/', (req, res, next) => {
  Country.find()
    .then(countries => {
      res.json(countries);
    })
    .catch(err => next(err))
});


// Route to get a static sample of countries
router.get('/static-sample', (req, res, next) => {
  res.json([{"capitals":[],"_id":"5a9ab1e751771a42c9af9a20","name":"France","__v":0},{"capitals":[],"_id":"5a9ab1f8a2dc8242cd54a87d","name":"France","__v":0},{"capitals":["[\"Paris\", \"Lyon\"]"],"_id":"5a9ab51fa2dc8242cd54a87e","name":"France","description":"Best country ever","__v":0},{"capitals":["Berlin","Munich"],"_id":"5a9ab5a8a2dc8242cd54a881","name":"Germany","description":"Second best country","__v":0},{"capitals":["Canberra"],"_id":"5a9ab7e6458133204b75d510","name":"Australia","area":7692024}])
});

// Route to add a country
router.post('/', (req, res, next) => {
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
