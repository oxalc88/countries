const { models } = require('../libs/sequelize');

class CountriesService {
    constructor() { }

    async find() {
        const response = await models.Country.findAll()
        return response;
    }
}