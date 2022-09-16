const { Country, Activity } = require('../db');
const { Op } = require("sequelize");
const e = require('express');
const { COUNTRY_API } = process.env
const axios = require('axios').default;

const searchAll = async (req, res, next) => {
    try {
        const countries = await Country.findAll()
        res.send(countries);
    } catch (error) {
        next(error);
    }
};

// const searchByName = async (req, res, next, name) => {
//     try {
//         const countryByName = await Country.findAll({
//             where: {
//                 name: {
//                     [Op.like]: `%${name}%`
//                 }
//             }
//         });
//         if (!countryByName[0]) {
//             return res.status(404).json(`There is no country with ${name}`)
//         }
//         res.send(countryByName);
//     } catch (error) {
//         next(error.message);
//     }
// }


const lookingForCountry = async (req, res) => {
    const { name } = req.query;
    try {
        if (!name) {
            const countries = await Country.findAll()
            res.send(countries);
        }
        else {
            const countryByName = await Country.findOne({
                where: {
                    name: {
                        [Op.like]: `%${name}%`
                    }
                }
            });
            if (!countryByName) {
                return res.status(404).send({ error: `There is no country with name: ${name}` })
            }
        }
        return res.send(countryByName)
    } catch (error) {
        console.error(error);
    }
};



// const getCountriesByAPI = async () => {
//     try {
//         let response = await axios.get(COUNTRY_API);
//         //let capital = response.data.map(c => c.capital)
//         let countryInfo = await response.data.map(country => {
//             return {
//                 id: country.cioc,
//                 name: country.name.common,
//                 flag: country.flags.svg,
//                 continent: country.region,
//                 capital: country.capital,
//                 subregion: country.subregion,
//                 area: country.area,
//                 population: country.population,
//                 map: country.maps.googleMaps,
//             }
//         });
//         return countryInfo
//     } catch (error) {
//         console.error(error.message);
//     }
// }

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