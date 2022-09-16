const { Country, Activity, CountryActivity } = require('../db');
const { Op } = require("sequelize");

const getAllActivities = async (req, res, next) => {
    try {
        const activities = await Activity.findAll()
        res.send(activities);
    } catch (error) {
        // res.status(404).json({
        //     error: error.message
        // })
        next(error);
    }
};

const createActivity = async (req, res, next) => {
    const { name, difficulty, duration, season, countryId } = req.body
    try {
        const newActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season,
        }
        );
        //const ifActivityExits = await Activity.findOne
        // const [newActivity, created] = await Activity.findOrCreate({
        //     where: {
        //         name,
        //         difficulty,
        //         duration,
        //         season,
        //     }
        // })
        //buscando el país a añadir
        const countryToAdd = await Country.findByPk(countryId)

        await newActivity.addCountry(countryToAdd, { through: CountryActivity })

        res.send(newActivity)

    } catch (error) {
        next(error)
    }
}

module.exports = { getAllActivities, createActivity }