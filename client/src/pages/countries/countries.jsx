import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import CountryList from '../../Components/CountryList/CountryList';
import { setCountries } from '../../redux/actions';
import Loading from '../../Components/Loading/Loading';
import { Pagination } from '../../Components/Pagination/Pagination';
import SearchBox from '../../Components/SearchBox/SearchBox';
import Dropdown from '../../Components/Dropdown/Dropdown';

const Countries = () => {

    const countries = useSelector(state => state.countries);
    const isLoading = useSelector(state => state.isLoading);
    const activities = useSelector(state => state.activities);

    const dispatch = useDispatch();

    //para filtrar por continente y actividad, además de ordenar por nombre y poblacion

    const continentFilter = countries.map(c => { return c.continent })
    const continents = new Set(continentFilter)
    const activity = new Set(activities.name)

    const filters = {
        orderPais: ['ASC', 'DESC'],
        orderPob: ['ASC', 'DESC'],
        continent: ['Todos', ...continents],
        activity: ['Todas', ...activity],
    }

    const [current, setCurrent] = useState(
        {
            page: 0,
            search: '',
            orderPais: filters.orderPais[0],
            orderPob: filters.orderPob[0],
            continent: filters.continent[0],
            activity: filters.activity[0],
        }
    )

    //para filtrar por nombre y paginado
    let countriesPaginated = countries.slice(current.page, current.page + 10)
    const country_searched_by_name = countries.filter(country => country.name.toLowerCase().includes(current.search.toLowerCase()))

    let countriesFilteredByName = () => {
        if (!current.search) return countriesPaginated
        return country_searched_by_name.slice(current.page, current.page + 10)
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

    const orderByName = (elem) => {
        let countries_ordered_by_name = (elem === filters.orderPais[0]) ? countries.sort((a, b) => a.name - b.name) : countries.reverse((a, b) => a.name - b.name);
        return countries_ordered_by_name
    }

    const orderByPoblation = (elem) => {
        const countries_ordered_by_poblation = (elem === filters.orderPob[0]) ? countries.sort((a, b) => a.population - b.population) : countries.reverse((a, b) => a.population - b.population);
        return countries_ordered_by_poblation
    }

    const filterByContinent = (elem) => {
        if (elem === filters.continent[0]) countriesFilteredByName()
        const filtered = countries.filter(country => country.continent === elem.value);
        return filtered
    }

    const handlers = (e, value) => {
        const handlerType = {
            'orderPais': orderByName(value),
            'orderPob': orderByPoblation(value),
            'continent': filterByContinent(value),
            'default': countriesFilteredByName(),
        }
        return handlerType[e] || handlerType['default']
    }

    const handleSelect = (e) => {
        setCurrent({ ...current, [e.target.name]: e.target.value, });
        return handlers(e.target.name, e.target.value)
    }


    useEffect(() => {
        dispatch(setCountries())
    }, [dispatch]);






    return (
        <div>
            <React.StrictMode>
                <div>
                    <Dropdown name={'orderPais'} value={current.orderPais} label={'Ordenar por: '} onChange={handleSelect} options={filters.orderPais} />
                    <Dropdown name={'orderPob'} value={current.orderPob} label={'Poblacion: '} onChange={handleSelect} options={filters.orderPob} />
                    <Dropdown name={'continent'} value={current.continent} label={'Filtrar por :'} onChange={handleSelect} options={filters.continent} />

                    <SearchBox value={current.search} onchange={onSearchChange} onSubmit={onSubmit} />
                    <Pagination nextpage={nextPage} prevPage={prevPage} />
                </div>
            </React.StrictMode>
            <h1>Paises</h1>
            <CountryList countries={countriesFilteredByName()} />
            {console.log(handlers)}
            {/* <Pagination
                data={countries}
                RenderComponent={CountryCard}
                title="Country"
                pageLimit={5}
                dataLimit={10}
            /> */}
            {/* {console.log(filters.order)}
            {console.log(filters.continent)} */}
            {/* {console.log(continentFilter)}
            {console.log(continents)} */}



            {
                isLoading && <Loading />
            }
        </div>
    )
}

export default Countries