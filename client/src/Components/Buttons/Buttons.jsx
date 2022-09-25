import Styles from './Buttons.module.css'

export const ButtonHome = ({ value }) => {
    return (
        <button className={Styles.country_home}>
            <span className={Styles.circle} aria-hidden="true">
                <span className={`${Styles.icon} ${Styles.arrow}`}></span>
            </span>
            <span className={Styles.button_text}>{value}</span>
        </button>
    )
}

export const ButtonBack = ({ value }) => {
    return (
        <button className={Styles.country_back} > {value}
        </button>
    )
}