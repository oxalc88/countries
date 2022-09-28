import { useState } from 'react'
import Styles from './formInput.module.css'

const FormInput = ({ label, name, value, onChange, errorMessage, ...validator }) => {

    const [focused, setFocused] = useState(false);

    const handleFocus = () => {
        setFocused(true)
    }

    return (
        <div className={Styles.formInput} >
            <label>{label}</label>
            <input
                name={name}
                value={value}
                onChange={onChange}
                {...validator}
                onBlur={handleFocus}
                focused={focused.toString()}
                onFocus={() => name === 'name' && setFocused(true)}
            />
            <span>{errorMessage}</span>
        </div>
    )
}

export default FormInput