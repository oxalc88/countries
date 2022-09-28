import { useCallback, useState } from 'react'
import styles from '../Form/FromCountrySelected.module.css'

const SearchBoxInput = ({ value, onChange }) => {

    // const [defaultValue, setDefaulValue] = useState('');

    // const handleChange = (e) => {
    //     setDefaulValue(e.target.name)
    //     onChange && onChange(e)
    // }
    // const [country, setCountry] = useState('')

    // const onSubmit = (e) => {
    //     e.preventDefault();
    // }

    // const onChange = (e) => {
    //     e.preventDefault();
    //     setCountry(e.target.value)
    // }



    return (
        <div>
            <input
                type='text'
                placeholder='Busca el país a agregar'
                value={value}
                onChange={onChange}
                name='search'
            //autoComplete='off'
            // className={styles.inputSearch}
            />
            {/* <input type="submit" value="Añadir" /> */}
        </div>
    )
}

export default SearchBoxInput