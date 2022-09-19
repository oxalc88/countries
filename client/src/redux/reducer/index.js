import { SET_COUNTRIES } from "../actions/types"

const initialState = {
    countries: [],
    countryDetail: [],
    activities: [],

}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
            };
        default:
            return state;
    }
};

