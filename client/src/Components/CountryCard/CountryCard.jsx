import React from 'react'
import styles from './countryCard.module.css'

function CountryCard({ name, continent, flag, capital }) {
    return (
        <article className={styles.card}>
            <img src={flag} alt={`flag of ${name}`} className={styles.img_fluid} />
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