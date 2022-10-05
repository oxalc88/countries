const { Country, Activity } = require('../db');
const { Op } = require("sequelize");
const { COUNTRY_API } = process.env
const axios = require('axios').default;

// const searchAll = async (req, res, next) => {
//     try {
//         const countries = await Country.findAll()
//         res.send(countries);
//     } catch (error) {
//         next(error);
//     }
// };



const lookingForCountry = async (req, res, next) => {
    const { name } = req.query;
    try {
        if (!name) {
            const countries = await Country.findAll({
                include: {
                    model: Activity,
                    attributes: ['name', 'difficulty', 'duration', 'season'],
                    through: {
                        attributes: [],
                    }
                }
            })
            res.send(countries);
        }

        const countryByName = await Country.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                }
            },
            include: {
                model: Activity,
                atributes: {
                    exclude: ['id', 'createdAt']
                },
                through: {
                    attributes: [],
                }
            }
        });
        if (!countryByName[0]) {
            console.log(countryByName)
            return res.send({ error: `There is no country with name: ${name}` })
        }
        return res.send(countryByName)

    } catch (error) {
        next(error);
    }
};


const countriesByApi = async (req, res) => {
    try {
        let response = await axios.get(COUNTRY_API);
        //let capital = response.data.map(c => c.capital)
        let countryInfo = await response.data.map(country => {
            return {
                id: country.cca3,
                name: country.name.common,
                flag: country.flags.svg,
                continent: country.region,
                capital: country.capital ? country.capital[0] : "No Data",
                subregion: country.subregion ? country.subregion : "No Data",
                area: country.area,
                population: country.population,
                map: country.maps.googleMaps,
            }
        });
        //let countryToBd = await countryInfo;

        countryInfo.map(async c => {
            await Country.create({
                id: c.id,
                name: c.name,
                flag: c.flag,
                continent: c.continent,
                capital: c.capital,
                subregion: c.subregion,
                area: c.area,
                population: c.population,
                map: c.map,
            })
        })
        return countryInfo;

    } catch (error) {
        next(error.message);
        //res.send(error.message)
    }
}



module.exports = { countriesByApi, lookingForCountry }