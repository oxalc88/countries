const { Country, Activity } = require('../db');
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


module.exports = { getAllActivities }