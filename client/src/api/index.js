import axios from 'axios'

const getCountries = async () => {
    try {
        const response = await axios.get('http://localhost:3001/countries');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

const getCountryDetail = async (id) => {
    try {
        const response = await axios.get(`http://localhost:3001/countries/:${id}`);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}

const getCountryByName = async (name) => {
    try {
        const response = await axios.get(`http://localhost:3001/countries?name=${name}`);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}

export { getCountries, getCountryDetail, getCountryByName }