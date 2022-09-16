const { Router } = require('express');
const { Activity } = require('../db');
const { getCountries, getCountrybyID } = require('../controllers/countries.controllers');
const { getAllActivities, createActivity } = require('../controllers/activities.controlers');



const router = Router();

router.get('/', getAllActivities)
router.post('/', createActivity)


module.exports = router