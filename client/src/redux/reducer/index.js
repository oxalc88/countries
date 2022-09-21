import { GET_COUNTRY_BY_NAME, SET_COUNTRIES } from "../actions/types"

const initialState = {
    countries: [],
    countryDetail: [],
    activities: [],
    isLoading: false,

}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_COUNTRIES:
        case GET_COUNTRY_BY_NAME:
            return {
                ...state,
                countries: action.payload
            };
        default:
            return state;
    }
};

