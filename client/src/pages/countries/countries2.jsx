import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import CountryList from '../../Components/CountryList/CountryList';
import { filterByContinent, orderByNameAsc, orderByNameDesc, orderByPopulationAsc, orderByPopulationDesc, setCountries } from '../../redux/actions';
//import Loading from '../../Components/Loading/Loading';
import { Pagination } from '../../Components/Pagination/Pagination';
//import SearchBox from '../../Components/SearchBox/SearchBox';
import Dropdown from '../../Components/Dropdown/Dropdown';
import SearchBox2 from '../../Components/SearchBox/SearchBox2.jsx';

const Countries2 = () => {

    const countries = useSelector(state => state.countries);
    const isLoading = useSelector(state => state.isLoading);
    const activities = useSelector(state => state.activities);
    const page = useSelector(state => state.pages)
    const search = useSelector(state => state.searchValue)

    const dispatch = useDispatch();

    //para filtrar por continente y actividad, además de ordenar por nombre y poblacion

    const continentFilter = countries.map(c => { return c.continent })
    const continents = new Set(continentFilter)
    const activity = new Set(activities.name)

    const filters = {
        orderPais: ['Alfabéticamente', 'A - Z', 'Z - A'],
        orderPob: ['Quien tiene', 'MAYOR', 'MENOR'],
        continent: ['Todos', ...continents],
        activity: ['Todas', ...activity],
    }

    const [current, setCurrent] = useState(
        {
            //page: 0,
            //search: '',
            orderPais: filters.orderPais[0],
            orderPob: filters.orderPob[0],
            continent: filters.continent[0],
            activity: filters.activity[0],
        }
    )

    const onFilterContinent = (e) => {
        let contientToFilter = e.target.value
        dispatch(filterByContinent(contientToFilter))
        setCurrent({ ...current, page: 0, continent: contientToFilter, });
    }

    const countriesAtoZ = (e) => {
        let countriesToOrder = e.target.value
        let order;
        if (countriesToOrder !== filters.orderPais[2]) {
            order = dispatch(orderByNameAsc(countriesToOrder))
        } else {
            order = dispatch(orderByNameDesc(countriesToOrder))
        }
        setCurrent({ ...current, page: 0, orderPais: countriesToOrder, });
        return order
    }

    const orderByPopulation = (e) => {
        let countriesToOrder = e.target.value
        let order;
        if (countriesToOrder !== filters.orderPob[1]) {
            order = dispatch(orderByPopulationAsc(countriesToOrder))
        } else {
            order = dispatch(orderByPopulationDesc(countriesToOrder))
        }
        setCurrent({ ...current, page: 0, orderPob: countriesToOrder, });
        return order
    }

    //para buscar por nombre y paginado
    let countriesPaginated = countries.slice(page, page + 10)
    const country_searched_by_name = countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))

    let countriesFilteredByName = () => {
        if (!search) return countriesPaginated
        return country_searched_by_name.slice(page, page + 10)
    }


    // const nextPage = () => {
    //     if (countries.length > current.page + 10) setCurrent({ ...current, page: current.page + 10 })

    // }

    // const prevPage = () => {
    //     if (current.page > 0)
    //         setCurrent({ ...current, page: current.page - 10 })
    // }




    useEffect(() => {
        dispatch(setCountries())
    }, [dispatch]);



    return (
        <div>
            <React.StrictMode>
                <div>
                    <Dropdown name={'orderPais'} value={current.orderPais} label={'Mostrar Países: '} onChange={countriesAtoZ} options={filters.orderPais} />
                    <Dropdown name={'orderPob'} value={current.orderPob} label={'Poblacion : '} onChange={orderByPopulation} options={filters.orderPob} />
                    <Dropdown name={'continent'} onChange={onFilterContinent} value={current.continent} label={'Filtrar por :'} options={filters.continent} />

                    <SearchBox2 current={current} />
                    <Pagination page={page} countries={countries} />
                </div>
            </React.StrictMode>
            <h1>Paises</h1>
            <CountryList countries={countriesFilteredByName()} />

            {/* {
                isLoading && <Loading />
            } */}
        </div>
    )
}

export default Countries2