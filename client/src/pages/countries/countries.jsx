import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import CountryList from '../../Components/CountryList/CountryList';
import { setCountries } from '../../redux/actions';
import Loading from '../../Components/Loading/Loading';
import { Pagination } from '../../Components/Pagination/Pagination';
import SearchBox from '../../Components/SearchBox/SearchBox';

const Countries = () => {
    const [current, setCurrent] = useState(
        {
            page: 0,
            search: '',
        }
    )

    const countries = useSelector(state => state.countries);
    const isLoading = useSelector(state => state.isLoading);
    const dispatch = useDispatch();

    let countriesPaginated = countries.slice(current.page, current.page + 10)
    const countryFiltered = countries.filter(country => country.name.toLowerCase().includes(current.search.toLowerCase()))

    let countriesFiltered = () => {
        if (!current.search) return countriesPaginated
        return countryFiltered.slice(current.page, current.page + 10)
    }


    const nextPage = () => {
        if (countries.length > current.page + 10) setCurrent({ ...current, page: current.page + 10 })

    }

    const prevPage = () => {
        if (current.page > 0)
            setCurrent({ ...current, page: current.page - 10 })
    }

    const onSearchChange = (e) => {
        setCurrent({ page: 0, search: e.target.value })
    }

    const onSubmit = () => {
        if (current.search.length === 0) return alert('Debe colocar un Pais')
        //dispatch(searchCountryByName(current.search));
        setCurrent({ ...current, search: '' });
    }

    useEffect(() => {
        dispatch(setCountries())
    }, [dispatch]);






    return (
        <div>
            <SearchBox value={current.search} onchange={onSearchChange} onSubmit={onSubmit} />
            <Pagination nextpage={nextPage} prevPage={prevPage} />
            <h1>Paises</h1>
            <CountryList countries={countriesFiltered()} />
            {/* <Pagination
                data={countries}
                RenderComponent={CountryCard}
                title="Country"
                pageLimit={5}
                dataLimit={10}
            /> */}
            {console.log(current.search)}
            {
                isLoading && <Loading />
            }
        </div>
    )
}

export default Countries