import { FILTER_CONTINENT, IS_LOADING, ORDER_COUNTRIES_BY_NAME_ASC, ORDER_COUNTRIES_BY_NAME_DESC, ORDER_COUNTRIES_BY_POPULATION_ASC, ORDER_COUNTRIES_BY_POPULATION_DESC, SEARCH_COUNTRY_BY_NAME, SET_COUNTRIES, SET_COUNTRY_DETAIL, SET_PAGES } from "../actions/types"

const initialState = {
    countries: [],
    countryDetailed: [],
    activities: [],
    isLoading: false,
    filteredContinent: [],
    pages: 0,
    searchValue: '',
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_COUNTRIES:
            return {
                ...state,
                filteredContinent: action.payload,
                countries: action.payload
            };

        case SET_COUNTRY_DETAIL:
            return {
                ...state,
                countryDetailed: action.payload
            };

        case ORDER_COUNTRIES_BY_NAME_ASC:
            let orderedName = [...state.countries].sort((a, b) => a.name.localeCompare(b.name))

            return {
                ...state,
                countries: orderedName
            };

        case ORDER_COUNTRIES_BY_NAME_DESC:
            let countriesToInvert = [...state.countries].sort((a, b) => a.name.localeCompare(b.name))
            let reversedName = [...countriesToInvert].reverse()

            return {
                ...state,
                countries: reversedName
            };

        case ORDER_COUNTRIES_BY_POPULATION_ASC:
            let orderedPob = [...state.countries].sort((a, b) => a.population - b.population)

            return {
                ...state,
                countries: orderedPob
            }

        case ORDER_COUNTRIES_BY_POPULATION_DESC:
            let populationOrdered = [...state.countries].sort((a, b) => a.population - b.population)
            let reversedPob = [...populationOrdered].reverse()
            return {
                ...state,
                countries: reversedPob
            }

        case FILTER_CONTINENT:
            let countriesToFilter = state.filteredContinent
            let filteredContient = action.payload === 'Todos' ? countriesToFilter : state.countries.filter(country => country.continent === action.payload)
            return {
                ...state,
                countries: filteredContient
            }

        case SEARCH_COUNTRY_BY_NAME:

            return {
                ...state,
                pages: action.payload.page,
                search: action.payload.value
            }


        case SET_PAGES:
            return {
                ...state,
                pages: action.payload.page,
            }

        case IS_LOADING:
            return {
                ...state,
                isLoading: true
            }

        default:
            return state;
    }
};

