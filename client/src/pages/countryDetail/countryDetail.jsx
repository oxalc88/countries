import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { ButtonBack } from '../../Components/Buttons/Buttons';
import ActivitiesContainer from '../../Components/CountryDetail/DetailContainer';
import { CountryDetailed } from '../../redux/actions';


function CountryDetail() {
    const { id } = useParams();
    const country = useSelector(state => state.countryDetailed);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(CountryDetailed(id))
    }, [dispatch, id])

    return (
            <div>
                <h1>{country.name}</h1>
                <div>
                    <section>
                        <article>
                            <h3>INFORMACIÓN BASICA</h3>
                            {country.capital !== 'No Data' && <p><b>Capital: </b>{country.capital}</p>}
                            <p><b>Continente: </b>{country.continent}</p>
                            <p><b>Sub Región: </b>{country.subregion}</p>
                            <p><b>Area: </b>{country.area}</p>
                            <p><b>Poblacion: </b>{country.population}</p>
                            <ActivitiesContainer countryName={country.name} activities={country.activities} />
                        </article>

                    </section>
                </div>
                <div>
                    <section>
                        <img src={country.flag} alt={country.name} width="600" height="450" />
                        <Link to={'/countries'}>
                            <ButtonBack value={'Volver'} />
                        </Link>
                    </section>
                </div>

            </div>
    )
}

export default CountryDetail