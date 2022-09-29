import styles from './search.module.css'

function SearchBox({ value, onchange, onSubmit }) {
    return (
        <div onSubmit={onSubmit} className={styles.search} >
            <input
                type='text'
                placeholder='Busca tu pais'
                value={value}
                onChange={onchange}
                name='input'
                autoComplete='off'
                className={styles.searchTerm}
            />

        </div>
    )
}

export default SearchBox