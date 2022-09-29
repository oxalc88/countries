const { Country, Activity, CountryActivity } = require('../db');
const { Op } = require("sequelize");
const { lookingForCountry } = require('../services/countries.service');

const getAllActivities = async (req, res, next) => {
    try {
        const activities = await Activity.findAll()
        res.send(activities);
    } catch (error) {
        next(error);
    }
};

const createActivity = async (req, res, next) => {

    // await lookingForCountry()
    const { name, difficulty, duration, season, countryId } = req.body
    try {
        const newActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season,
            // countryId,
        }
        );
        console.log('Id recibido', countryId);
        const countryToAdd = await Country.findAll({
            where: {
                id: countryId
            }
        })

        const toSend = await newActivity.addCountries(countryToAdd, { through: CountryActivity })

        res
            .send(toSend)
            .json({ msg: 'Actividad Creada' })

    } catch (error) {
        next(error)
        //console.log(error.message);
    }
}

module.exports = { getAllActivities, createActivity }