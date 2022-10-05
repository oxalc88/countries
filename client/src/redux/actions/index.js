import axios from "axios";
import { FILTER_CONTINENT, SET_COUNTRIES, SET_COUNTRY_DETAIL, ORDER_COUNTRIES_BY_POPULATION_ASC, ORDER_COUNTRIES_BY_NAME_ASC, ORDER_COUNTRIES_BY_NAME_DESC, ORDER_COUNTRIES_BY_POPULATION_DESC, CREATE_ACTIVITY, FILTER_ACTIVITY, SET_ACTIVITIES } from "./types";
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

export const setActivities = () => async (dispatch) => {
    try {
        const activities = await axios.get(REACT_APP_API_POST);
        return dispatch({
            type: SET_ACTIVITIES,
            payload: activities.data,
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

export const filterByActivity = (payload) => {
    return {
        type: FILTER_ACTIVITY,
        payload,
    }
}

export const createActivity = (payload) => async (dispatch) => {
    console.log('payload', payload);
    try {
        await axios.post(REACT_APP_API_POST, payload);

        return dispatch({
            type: CREATE_ACTIVITY,
        });
    } catch (error) {
        console.log(error)
        throw new Error(error.message);
    }
};