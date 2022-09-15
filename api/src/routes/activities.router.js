const { Router } = require('express');
const { Activity } = require('../db');
const { getCountries, getCountrybyID } = require('../controllers/countries.controllers');
const { getAllActivities } = require('../controllers/activities.controlers');



const router = Router();

router.get('/', getAllActivities)


module.exports = router