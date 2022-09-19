import axios from 'axios'

const getCountries = async () => {
    try {
        const response = await axios.get('http://localhost:3001/countries');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export default getCountries;