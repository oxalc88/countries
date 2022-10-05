const { Country, Activity } = require('../db');
const { Op } = require("sequelize");
const { searchAll, searchByName, countriesByApi, lookingForCountry } = require('../services/countries.service');

const getCountries = async (req, res, next) => {
    const count = await Country.count()
    if (count === 0) return countriesByApi()
    return lookingForCountry(req, res, next)
}

const getCountrybyID = async (req, res, next) => {
    const { idPais } = req.params
    try {
        const countryByID = await Country.findByPk(idPais, {
            include: {
                model: Activity,
                atributes: {
                    exclude: ['id', 'createdAt']
                },
                through: {
                    attributes: [],
                }
            },
        });
        res.json(countryByID);
    } catch (error) {
        next(error.message);
    }
}

module.exports = { getCountries, getCountrybyID }