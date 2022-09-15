const { Router } = require('express');
const { Country } = require('../db');
const { getCountries, getCountrybyID } = require('../controllers/countries.controllers');


const router = Router();

// router.get('/', async (req, res, next) => {
//     try {
//         const countries = await Country.findAll()
//         res.send(countries);
//     } catch (error) {
//         // res.status(404).json({
//         //     error: error.message
//         // })
//         next(error);
//     }
// });

router.get('/', getCountries)

// router.get('/:idPais', async (req, res, next) => {
//     const { idPais } = req.params
//     try {
//         const countryByID = await Country.findByPk(idPais);
//         res.json(countryByID);
//     } catch (error) {
//         // res.status(404).json({
//         //     error: error.message
//         // })
//         next(error);
//     }
// });

router.get('/:idPais', getCountrybyID);

// router.get('/', async (req, res, next) => {
//     const { name } = req.query;
//     try {
//         const countryByName = await Country.findOne({
//             where: { 
//                 [Op.like]: `%${name}%` }
//         });
//         res.json(countryByName);
//     } catch (error) {
//         next(error);
//     }
// });

module.exports = router;