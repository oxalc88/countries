import styles from './Selector.module.css'

export const Selector = ({ name, value, onChange, label }) => {
    return (
        <label className={`${styles.option} ${styles.option1}`} >
            <input value={value} name={name} type='radio' onChange={onChange} />
            {label}
        </label>
    )
}
