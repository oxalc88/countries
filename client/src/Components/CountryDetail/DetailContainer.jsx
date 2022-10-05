import { Link } from 'react-router-dom'
import { ButtonBack } from '../Buttons/Buttons';

function ActivitiesContainer({ activities, countryName }) {
    if (activities && activities.length > 0) {
        return (
            <div>
                <h3>Qué puedes hacer en {countryName}</h3>
                {activities && activities.map((activity, index) => (
                    <div key={index}>
                        <p><b>Actividad: </b>{activity.name}</p>
                        <p><b>Duracion: </b> {activity.duration} Horas</p>
                        <p><b>Dificultad: </b> {activity.difficulty}</p>
                        <p><b>Temporada: </b>{activity.season}</p>

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