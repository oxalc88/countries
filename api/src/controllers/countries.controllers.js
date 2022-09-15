const { Country, Activity } = require('../db');
const { Op } = require("sequelize");
//const { Sequelize } = require("sequelize");



const searchAll = async (req, res, next) => {
    try {
        const countries = await Country.findAll()
        res.send(countries);
    } catch (error) {
        // res.status(404).json({
        //     error: error.message
        // })
        next(error);
    }
};

const searchByName = async (req, res, next, name) => {
    try {
        const countryByName = await Country.findOne({
            where: {
                [Op.like]: `%${name}%`
            }
        });
        if (!countryByName) {
            return res.status(404).json({
                msg: 'País no encontrado'
            })
        }
        res.json(countryByName);
    } catch (error) {
        next(error);
    }
}

const getCountries = (req, res, next) => {
    const { name } = req.query;
    //    return name ? searchAll(req, res, next) : searchByName(req, res, next)
    if (!name) return searchAll(req, res, next)
    return searchByName(req, res, next, name)
}

const getCountrybyID = async (req, res, next) => {
    const { idPais } = req.params
    try {
        const countryByID = await Country.findByPk(idPais, {
            include: Activity,
        });
        res.json(countryByID);
    } catch (error) {
        // res.status(404).json({
        //     error: error.message
        // })
        next(error);
    }
}

module.exports = { getCountries, getCountrybyID }