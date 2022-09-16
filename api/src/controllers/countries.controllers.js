const { Country, Activity } = require('../db');
const { Op } = require("sequelize");
const { searchAll, searchByName, countriesByApi, lookingForCountry } = require('../services/countries.service');

const getCountries = async (req, res, next) => {
    //const { name } = req.query;
    const count = await Country.count()
    if (count === 0) return countriesByApi()
    // else if (!name) return searchAll(req, res, next)
    // else return searchByName(req, res, next, name)
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