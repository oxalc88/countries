import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setCountryDetail } from '../../redux/actions';
import { ButtonBack } from '../Buttons/Buttons';

function ActivitiesContainer({ activities, countryName }) {
    if (activities && activities.length > 0) {
        return (
            <div>
                <h3>Qué puedes hacer en {countryName}</h3>
                {activities && activities.map((activity) => (
                    <div>
                        <p><b>Actividad: </b>{activity.name}</p>
                        <p><b>Dificultad: </b> {activity.difficulty}</p>
                        <p><b>Duracion: </b> {activity.duration}</p>
                        {activity.season && activity.season.map(s => { return <p id={s.id}><b>Temporada: </b>{s.name}</p> })}

                    </div>))
                }
            </div>
        )
    } else {

        return (
            <Link to={'/activities'}>
                <ButtonBack value={`Cuéntales a los demás que actividades puedes hacer en ${countryName}`} />
            </Link>
        )
    }
}

export default ActivitiesContainer