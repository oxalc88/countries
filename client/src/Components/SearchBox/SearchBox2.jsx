import { useDispatch, useSelector } from 'react-redux'
import { onSearchChange, setPages } from '../../redux/actions'

const SearchBox2 = ({ current }) => {

    const searchValue = useSelector(state => state.searchValue)
    //const pages = useSelector(state => state.pages)
    const dispatch = useDispatch();
    //const [searchValue, setSearchValue] = useState(current)

    const onChange = (e) => {
        dispatch(setPages(0))
        dispatch(onSearchChange(e.target.value))
    }

    const onSubmit = () => {
        if (!searchValue.length) return alert('Debe colocar un Pais')
        dispatch(onSearchChange(''))
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type='text'
                placeholder='Busca tu pais'
                value={searchValue}
                onChange={onChange}
                name='input'
                autoComplete='off'
            />

        </form>
    )
}

export default SearchBox2