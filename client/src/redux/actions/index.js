import axios from "axios";
import { FILTER_CONTINENT, GET_COUNTRY_BY_NAME, SET_COUNTRIES, SET_COUNTRY_DETAIL, SET_PAGES } from "./types";
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


export const searchCountryByName = (name) => async (dispatch) => {
    try {
        const getCountryName = axios.get(`${REACT_APP_API_URL}/?name=${name}`);
        return dispatch({
            type: GET_COUNTRY_BY_NAME,
            payload: getCountryName.data,
        });
    } catch (error) {
        return console.error(error.message);
    }
};
//     return function (dispatch) {
//         return fetch(`${API_URL}?name=${name}`)
//             .then(data => data.json())
//             .then(res => {
//                 return dispatch({
//                     type: GET_COUNTRY_BY_NAME,
//                     payload: res,
//                 })
//             })
//     }
// };

export const filter_continent = (query) => ({
    type: FILTER_CONTINENT,
    payload: query,
})



export const setPages = (payload) => ({
    type: SET_PAGES,
    payload
})