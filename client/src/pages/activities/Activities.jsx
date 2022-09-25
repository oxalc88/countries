import React, { useState } from 'react'
import FormInput from '../../Components/FormInput/FormInput'
import styles from './activities.module.css'

function Activities() {
    //const [options, setOptions] = useState([])
    //const [radioValue, setRadioValues] = useState(1)
    let [valueInput, setValueInput] = useState({
        name: '',
        difficulty: 1,
        duration: 1,
        season: [{ name: 'Toda la Temporada' },],
        country: [{ name: '' }]
    })

    let handleChange = (e) => {
        setValueInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(valueInput);
        setValueInput({
            name: '',
            difficulty: '',
            duration: '',
            season: [{ name: '' },],
            country: [{ name: '' }]
        })
    }

    const letters = '^[A-Za-z]+$'

    const validator = {
        errorname: 'Ingresar solo letras y no dejar vacío',
        errornumber: 'escoge un valor de 1 a 5',
        pattern: letters,
        required: true,
    }

    return (
        <div className={styles.activities} >
            {/* <div>
            </div> */}

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
                {/* <div>
                    <label>Dificultad</label>
                    <input
                        type={'number'}
                        min={1}
                        max={5}
                        name={'difficulty'}
                        value={input.difficulty}
                        onChange={e => handleChange(e)}
                    />
                </div> */}
                {/* <div>
                    <label>Duracion</label>
                    <input
                        type={'number'}
                        min={1}
                        max={5}
                        name={'duration'}
                        value={input.duration}
                        onChange={e => handleChange(e)}
                    />
                </div> */}
                <div>
                    <label>Temporada de la Actividad</label>
                    <select
                        value={valueInput.season.name}
                        onChange={e => handleChange(e)}
                    >
                        {valueInput.season.map((s) => (
                            <option key={s.name} value={s.name}>
                                {s.name}
                            </option>))
                        }
                    </select>
                </div>
                <div>
                    <label>Pais</label>
                    <select
                        value={valueInput.country.name}
                        onChange={e => handleChange(e)}
                    >
                        {valueInput.country.map((c) => (
                            <option key={c.name} value={c.name}>
                                {c.name}
                            </option>))
                        }
                    </select>
                </div>
                <input className={styles.formButton} type={'submit'} value={'Crea tu Actividad'} />
            </form>
        </div>
    )
}

export default Activities