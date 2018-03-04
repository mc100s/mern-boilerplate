var express = require('express');
const Country = require('../models/country')

var router = express.Router();

router.get('/process', function(req, res, next) {
  res.json(process.env)
})

router.get('/', function(req, res, next) {
  res.json([{"capitals":[],"_id":"5a9ab1e751771a42c9af9a20","name":"France","__v":0},{"capitals":[],"_id":"5a9ab1f8a2dc8242cd54a87d","name":"France","__v":0},{"capitals":["[\"Paris\", \"Lyon\"]"],"_id":"5a9ab51fa2dc8242cd54a87e","name":"France","description":"Best country ever","__v":0},{"capitals":["Berlin","Munich"],"_id":"5a9ab5a8a2dc8242cd54a881","name":"Germany","description":"Second best country","__v":0},{"capitals":["Canberra"],"_id":"5a9ab7e6458133204b75d510","name":"Australia","area":7692024},{"capitals":["Sucre"],"_id":"5a9ab7e6458133204b75d511","name":"Bolivia","area":1098581},{"capitals":["Brasília"],"_id":"5a9ab7e6458133204b75d512","name":"Brazil","area":8515767},{"capitals":["Ottawa"],"_id":"5a9ab7e6458133204b75d513","name":"Canada","area":9984670},{"capitals":["Beijing"],"_id":"5a9ab7e6458133204b75d514","name":"China","area":9706961},{"capitals":["Kinshasa"],"_id":"5a9ab7e6458133204b75d515","name":"DR Congo","area":2344858},{"capitals":["Bogotá"],"_id":"5a9ab7e6458133204b75d516","name":"Colombia","area":1141748},{"capitals":["Algiers"],"_id":"5a9ab7e6458133204b75d517","name":"Algeria","area":2381741},{"capitals":["Cairo"],"_id":"5a9ab7e6458133204b75d518","name":"Egypt","area":1002450},{"capitals":["Addis Ababa"],"_id":"5a9ab7e6458133204b75d519","name":"Ethiopia","area":1104300},{"capitals":["Nuuk"],"_id":"5a9ab7e6458133204b75d51a","name":"Greenland","area":2166086},{"capitals":["Jakarta"],"_id":"5a9ab7e6458133204b75d51b","name":"Indonesia","area":1904569},{"capitals":["New Delhi"],"_id":"5a9ab7e6458133204b75d51c","name":"India","area":3287590},{"capitals":["Tehran"],"_id":"5a9ab7e6458133204b75d51d","name":"Iran","area":1648195},{"capitals":["Astana"],"_id":"5a9ab7e6458133204b75d51e","name":"Kazakhstan","area":2724900},{"capitals":["Tripoli"],"_id":"5a9ab7e6458133204b75d51f","name":"Libya","area":1759540},{"capitals":["Mexico City"],"_id":"5a9ab7e6458133204b75d520","name":"Mexico","area":1964375},{"capitals":["Bamako"],"_id":"5a9ab7e6458133204b75d521","name":"Mali","area":1240192},{"capitals":["Ulan Bator"],"_id":"5a9ab7e6458133204b75d522","name":"Mongolia","area":1564110},{"capitals":["Nouakchott"],"_id":"5a9ab7e6458133204b75d523","name":"Mauritania","area":1030700},{"capitals":["Niamey"],"_id":"5a9ab7e6458133204b75d524","name":"Niger","area":1267000},{"capitals":["Lima"],"_id":"5a9ab7e6458133204b75d525","name":"Peru","area":1285216},{"capitals":["Moscow"],"_id":"5a9ab7e6458133204b75d526","name":"Russia","area":17098242},{"capitals":["Riyadh"],"_id":"5a9ab7e6458133204b75d527","name":"Saudi Arabia","area":2149690},{"capitals":["Khartoum"],"_id":"5a9ab7e6458133204b75d528","name":"Sudan","area":1886068},{"capitals":["N'Djamena"],"_id":"5a9ab7e6458133204b75d529","name":"Chad","area":1284000},{"capitals":["Washington D.C."],"_id":"5a9ab7e6458133204b75d52a","name":"United States","area":9372610},{"capitals":["Buenos Aires"],"_id":"5a9ab7e6458133204b75d52b","name":"Argentina","area":2780400},{"capitals":["Pretoria","Bloemfontein","Cape Town"],"_id":"5a9ab7e6458133204b75d52c","name":"South Africa","area":1221037},{"capitals":[""],"_id":"5a9ab7e6458133204b75d52d","name":"Antarctica","area":14000000},{"capitals":["Luanda"],"_id":"5a9ab7e6458133204b75d52e","name":"Angola","area":1246700}])
});

router.get('/db', function(req, res, next) {
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
