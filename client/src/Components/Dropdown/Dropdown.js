import React from 'react'
import DropdownItem from './DropdownItem'

function Dropdown({ value, onChange, options, label, name, valueToFilter }) {

    return (
        <div>
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