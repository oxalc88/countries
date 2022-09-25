import React from 'react';
import { useDispatch } from 'react-redux';
import { setPages } from '../../redux/actions';

export const PaginationCopy = ({ page, countries }) => {
    const dispatch = useDispatch()

    const nextPage = () => {
        if (countries.length > page + 10) dispatch(setPages(page + 10))

    }

    const prevPage = () => {
        if (page > 0) dispatch(setPages(page - 10))
    }
    return (
        <div>
            <button onClick={prevPage}>
                Anteriores
            </button>
            & nsbp
            <button onClick={nextPage}
            >
                Siguientes
            </button>
        </div >)
}