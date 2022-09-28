import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FormInput from '../../Components/Form/FormInput'
import FormTodoCountries from '../../Components/Form/FormTodoCountries';
import { createActivity, orderByNameAsc, setCountries } from '../../redux/actions';
import styles from './activities.module.css'

function Activities() {


    const countries = useSelector(state => state.countries);
    const dispatch = useDispatch();


    let [valueInput, setValueInput] = useState({
        name: '',
        difficulty: 1,
        duration: 1,
        season: [],
        searchCountry: '',
        //countryId: ''

    })

    let seasons = [
        { name: 'Escoge Temporada', value: 'default' },
        { name: 'Todo el año', value: 'all year' },
        { name: 'Verano', value: 'summer' },
        { name: 'Otoño', value: 'autumm' },
        { name: 'Invierno', value: 'winter' },
        { name: 'Primavera', value: 'spring' }
    ]

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log('form Activity', valueInput);
        dispatch(createActivity(valueInput))
        setValueInput({
            name: '',
            difficulty: '',
            duration: '',
            season: [],
            searchCountry: '',
        })
    }

    const letters = '^[a-zA-Z\s]*$'

    const validator = {
        errorname: 'Ingresar solo letras y no dejar vacío',
        errornumber: 'escoge un valor de 1 a 5',
        pattern: letters,
        required: true,
    }


    let handleChange = (e) => {
        e.preventDefault();
        setValueInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    let handleSelect = (e) => {
        const countryFiltered = countries.filter(country => country.id === e.target.value)
        // const order = dispatch(orderByNameAsc())
        // const countryFiltered = order.filter(country => country.id === e.target.value);
        e.preventDefault();
        setValueInput((prev) => ({ ...prev, searchCountry: e.target.value, }))
    }

    const onSearchChange = (e) => {
        e.preventDefault()
        setValueInput({ ...valueInput, searchCountry: e.target.value })
    }

    const onClose = (id) => {
        const discardCountries = valueInput.setCountries.filter(dc => dc.id !== id)
        setValueInput({ ...valueInput, searchCountry: discardCountries })
    }

    useEffect(() => {
        dispatch(setCountries())
    }, [dispatch]);

    return (
        <div className={styles.activities} >

            <form onSubmit={e => handleSubmit(e)} >
                <h2>Crear Actividad</h2>
                <FormInput
                    type={'text'}
                    name={'name'}
                    value={valueInput.name}
                    onChange={e => handleChange(e)}
                    label={'Nombre Actividad'}
                    errorMessage={validator.errorname}
                    {...validator}
                />
                <FormInput
                    type={'number'}
                    name={'difficulty'}
                    value={valueInput.difficulty}
                    onChange={e => handleChange(e)}
                    label={'Dificultad'}
                    min={1}
                    max={5}
                    errorMessage={validator.errornumber}

                />
                <FormInput
                    type={'number'}
                    name={'duration'}
                    value={valueInput.duration}
                    onChange={e => handleChange(e)}
                    label={'Duración'}
                    min={1}
                    max={5}
                    errorMessage={validator.errornumber}

                />
                <div>
                    <label>Temporada de la Actividad </label>
                    <select
                        value={valueInput.season.value}
                        onChange={e => handleChange(e)}
                        name={'season'}
                    >
                        {seasons.map((s) => (
                            <option key={s.name} value={s.value}>
                                {s.name}
                            </option>))
                        }
                    </select>
                </div>
                <div>
                    <div>
                        <label>Pais</label>
                        <select
                            value={valueInput.searchCountry}
                            onChange={e => handleSelect(e)}
                            name={'searchCountry'}
                        //multiple={true}
                        >
                            {countries.map((c) => (
                                <option
                                    key={c.id}
                                    value={c.id}
                                >
                                    {c.name}
                                </option>
                            ))
                            }
                        </select>
                        {/* {console.log('id a enviar', valueInput.searchCountry)} */}

                    </div>
                </div>
                {/*<FormTodoCountries*/}
                {/*    // id={valueInput.searchCountry.id}*/}
                {/*    // name={valueInput.searchCountry.name}*/}
                {/*    // flag={valueInput.searchCountry.flag}*/}
                {/*    value={valueInput.searchCountry}*/}
                {/*    onClose={onClose} />*/}

                <input className={styles.formButton} type={'submit'} value={'Crea tu Actividad'} />
            </form>
        </div>
    )
}

export default Activities