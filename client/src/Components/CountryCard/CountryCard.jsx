import React from 'react'
import { Link } from 'react-router-dom'
import styles from './countryCard.module.css'

function CountryCard({ name, continent, flag, capital, id }) {
    return (
        <article className={styles.card}>
            <Link to={`/countries/${id}`} >
                <img src={flag} alt={`flag of ${name}`} className={styles.img_fluid} />
            </Link>

            <div className={styles.card_content}>
                <h3>{name}</h3>
                <p>
                    <b>Continente: </b>
                    {continent}
                </p>
                <p>
                    <b>Capital: </b>
                    {capital}
                </p>
            </div>
        </article>
    )
}

export default CountryCard