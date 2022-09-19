import React, { useState } from 'react'

function Activities() {
    //const [options, setOptions] = useState([])
    //const [radioValue, setRadioValues] = useState(1)
    let [input, setInput] = useState({
        name: '',
        difficulty: 1,
        duration: 1,
        season: [{ name: 'Toda la Temporada' },],
        country: [{ name: '' }]
    })

    let handleChange = (e) => {
        setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
        setInput({
            name: '',
            difficulty: '',
            duration: '',
            season: [{ name: '' },],
            country: [{ name: '' }]
        })
    }

    return (
        <>
            <div>
                <h2>Crear Actividad</h2>
            </div>
            <form onSubmit={e => handleSubmit(e)} >
                <div>
                    <label>Nombre Actividad</label>
                    <input
                        type={'text'}
                        name={'name'}
                        value={input.name}
                        onChange={e => handleChange(e)}
                    />
                </div>
                <div>
                    <label>Dificultad</label>
                    <input
                        type={'number'}
                        min={1}
                        max={5}
                        name={'difficulty'}
                        value={input.difficulty}
                        onChange={e => handleChange(e)}
                    />
                </div>
                <div>
                    <label>Duracion</label>
                    <input
                        type={'number'}
                        min={1}
                        max={5}
                        name={'duration'}
                        value={input.duration}
                        onChange={e => handleChange(e)}
                    />
                </div>
                <div>
                    <label>Temporada de la Actividad</label>
                    <select
                        value={input.season.name}
                        onChange={e => handleChange(e)}
                    >
                        {input.season.map((s) => (
                            <option key={s.name} value={s.name}>
                                {s.name}
                            </option>))
                        }
                    </select>
                </div>
                <div>
                    <label>Pais</label>
                    <select
                        value={input.country.name}
                        onChange={e => handleChange(e)}
                    >
                        {input.country.map((c) => (
                            <option key={c.name} value={c.name}>
                                {c.name}
                            </option>))
                        }
                    </select>
                </div>
                <input type={'submit'} value={'Crea tu Actividad'} />
            </form>
        </>
    )
}

export default Activities