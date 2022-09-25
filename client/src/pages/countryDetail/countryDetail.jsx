import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { ButtonBack } from '../../Components/Buttons/Buttons';
import { CountryDetailed } from '../../redux/actions';


function CountryDetail() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const country = useSelector(state => state.countryDetailed);
    const activities = useSelector(state => state.activities);


    // const probando = (id) => async () => {
    //     try {
    //         const getDetail = await axios.get(`${REACT_APP_API_URL}/${id}`);
    //         return getDetail.data

    //     } catch (error) {
    //         return console.error(error);
    //     }
    // };


    useEffect(() => {
        dispatch(CountryDetailed(id))
    }, [dispatch, id])

    // const country = (id) => probando(id);
    // useEffect(() => {
    //     country()
    // })

    return (
        <>
            <div>
                <h1>{country.name}</h1>
                <div>
                    <section>
                        <h3>INFORMACIÓN BASICA</h3>
                        {country.capital !== 'No Data' && <p><b>Capital: </b>{country.capital}</p>}
                        <p><b>Continente: </b>{country.continent}</p>
                        <p><b>Sub Región: </b>{country.subregion}</p>
                        <p><b>Area: </b>{country.area}</p>
                        <p><b>Poblacion: </b>{country.population}</p>
                        {!activities && <h3>ACTIVIDADES</h3>}
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
        </>
    )
}

export default CountryDetail