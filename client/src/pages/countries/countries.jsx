import React, { useEffect } from 'react'
import getCountries from '../../api';
import { useSelector, useDispatch } from 'react-redux';
import CountryList from '../../Components/CountryList/CountryList';
import { setCountries } from '../../redux/actions';

const Countries = () => {

    //const [countries, setCountries] = useState([]);
    const countries = useSelector(state => state.countries);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchCountries = async () => {
            const countriesRes = await getCountries();
            dispatch(setCountries(countriesRes));
        }
        fetchCountries();
    }, [dispatch]);

    return (
        <div>
            <CountryList countries={countries} />
        </div>
    )
}

export default Countries