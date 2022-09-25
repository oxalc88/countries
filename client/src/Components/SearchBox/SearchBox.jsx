import React from 'react'

function SearchBox({ value, onchange, onSubmit }) {
    return (
        <form onSubmit={onSubmit}>
            <input
                type='text'
                placeholder='Busca tu pais'
                value={value}
                onChange={onchange}
                name='input'
                autoComplete='off'
            />

        </form>
    )
}

export default SearchBox