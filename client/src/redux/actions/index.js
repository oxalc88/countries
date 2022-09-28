import axios from "axios";
import { FILTER_CONTINENT, SET_COUNTRIES, SET_COUNTRY_DETAIL, ORDER_COUNTRIES_BY_POPULATION_ASC, ORDER_COUNTRIES_BY_NAME_ASC, ORDER_COUNTRIES_BY_NAME_DESC, ORDER_COUNTRIES_BY_POPULATION_DESC, CREATE_ACTIVITY } from "./types";
const { REACT_APP_API_URL, REACT_APP_API_POST } = process.env



export const setCountries = () => async (dispatch) => {
    try {
        const countries = await axios.get(REACT_APP_API_URL);
        return dispatch({
            type: SET_COUNTRIES,
            payload: countries.data,
        });
    } catch (err) {
        throw new Error(err.message);
    }
}


export const CountryDetailed = (id) => async (dispatch) => {
    try {
        const getDetail = await axios.get(`${REACT_APP_API_URL}/${id}`);
        return dispatch({
            type: SET_COUNTRY_DETAIL,
            payload: getDetail.data,
        });
    } catch (error) {
        throw new Error(error.message);
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

// export const setPages = (payload) => ({
//     type: SET_PAGES,
//     payload
// })

// export const onSearchChange = (payload) => ({
//     type: SEARCH_COUNTRY_BY_NAME,
//     payload
// })

export const createActivity = (payload) => async (dispatch) => {
    console.log('payload', payload);
    try {
        const activityResponse = await axios.post(REACT_APP_API_POST, payload);
        console.log(activityResponse);
        return dispatch({
            type: CREATE_ACTIVITY,
            payload: activityResponse,
        });
    } catch (error) {
        throw new Error(error.message);
    }
};