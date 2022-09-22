import React from 'react'
import styles from './dropdown.module.css'

function DropdownItem({ value }) {
    return (
        <>
            <option className={styles.dropdownItem}>
                {/* <span className={styles.iconButton} > icono</span> */}
                {value}
            </option>
            {/* {console.log(value)} */}
        </>
    )
}

export default DropdownItem

