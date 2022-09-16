const { Router } = require('express');
const { getCountries, getCountrybyID } = require('../controllers/countries.controllers');


const router = Router();

router.get('/', getCountries)
router.get('/:idPais', getCountrybyID);


module.exports = router;