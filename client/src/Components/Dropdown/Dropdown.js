import React from 'react'
import DropdownItem from './DropdownItem'
import styles from './dropdown.module.css'

function Dropdown({ value, onChange, options, label, name, valueToFilter }) {

    return (
        <div className={styles.box}>
            <label>
                {label}
                <select value={value} onChange={onChange} name={name}>
                    {options.map(option => {
                        return <DropdownItem
                            key={option}
                            value={option}

                        />
                    }
                    )}
                </select>
            </label>

        </div>
    )
}

export default Dropdown