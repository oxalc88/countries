import axios from "axios";
import { FILTER_CONTINENT, GET_COUNTRY_BY_NAME, SET_COUNTRIES, SET_COUNTRY_DETAIL, SET_PAGES, ORDER_COUNTRIES_BY_POPULATION_ASC, ORDER_COUNTRIES_BY_NAME_ASC, ORDER_COUNTRIES_BY_NAME_DESC, ORDER_COUNTRIES_BY_POPULATION_DESC } from "./types";
const { REACT_APP_API_URL } = process.env

// export const setCountries = (payload) => ({
//     type: SET_COUNTRIES,
//     payload,
// })

export const setCountries = () => async (dispatch) => {
    try {
        const countries = await axios.get(REACT_APP_API_URL);
        return dispatch({
            type: SET_COUNTRIES,
            payload: countries.data,
        });
    } catch (err) {
        return Error(err.message);
    }
}


export const setCountryDetail = (id) => async (dispatch) => {
    try {
        const getDetail = axios.get(`${REACT_APP_API_URL}/${id}`);
        return dispatch({
            type: SET_COUNTRY_DETAIL,
            payload: getDetail.data,
        });
    } catch (error) {
        return Error(error.message);
    }
};


// export const searchCountryByName = (name) => async (dispatch) => {
//     try {
//         const getCountryName = axios.get(`${REACT_APP_API_URL}/?name=${name}`);
//         return dispatch({
//             type: GET_COUNTRY_BY_NAME,
//             payload: getCountryName.data,
//         });
//     } catch (error) {
//         return console.error(error.message);
//     }
// };

export const orderByNameAsc = (payload) => {
    return {
        type: ORDER_COUNTRIES_BY_NAME_ASC,
        payload
    }
}

export const orderByNameDesc = (payload) => {
    return {
        type: ORDER_COUNTRIES_BY_NAME_DESC,
        payload
    }
}

export const orderByPopulationAsc = (payload) => {
    return {
        type: ORDER_COUNTRIES_BY_POPULATION_ASC,
        payload
    }
}

export const orderByPopulationDesc = (payload) => {
    return {
        type: ORDER_COUNTRIES_BY_POPULATION_DESC,
        payload
    }
}

export const filterByContinent = (payload) => {
    return {
        type: FILTER_CONTINENT,
        payload,
    }
}



export const setPages = (payload) => ({
    type: SET_PAGES,
    payload
})