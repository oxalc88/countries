import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setCountryDetail } from '../../redux/actions';

function DetailContainer() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const country = useSelector(country => country.countries);

    useEffect(() => {
        dispatch(setCountryDetail(id))
    })

    return (
        <div style={{
            backgroundImage: `url(${country.flag})`
        }}>
            <h1>{country.name}</h1>
            <div>
                <section>
                    <h3>INFORMACIÓN BASICA</h3>
                    {country.capital}? <p><b>Capital: </b>{country.capital}</p>: <p></p>
                    <p><b>Continente: </b>{country.continent}</p>
                    <p><b>Sub Región: </b>{country.subregion}</p>
                    <p><b>Area: </b>{country.area}</p>
                    <p><b>Poblacion: </b>{country.population}</p>
                    <h3>ACTIVIDADES</h3>
                </section>
            </div>
            <div>
                <section>
                    <iframe title={`map of: ${country.name}`} src={country.map} height={500} width={500} />
                </section>
            </div>
        </div>
    )
}

export default DetailContainer