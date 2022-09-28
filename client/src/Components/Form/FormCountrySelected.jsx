import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setCountries } from '../../redux/actions';
import styles from './FromCountrySelected.module.css'

const FormCountrySelected = ({ results = [], renderItem, onChange, onSelect, value }) => {

    const [focusedIndex, setFocusedIndex] = useState(-1);
    const resultContainer = useRef(null);
    const [showCountryResults, setShowCountryResults] = useState(false);
    const [defaultValue, setDefaulValue] = useState('');

    const dispatch = useDispatch()

    const handleSelection = (selectedIndex) => {
        const selectedItem = showCountryResults[selectedIndex];
        if (!selectedItem) return resetSearchComplete();
        onSelect && onSelect(selectedItem);
        resetSearchComplete();
    }

    const resetSearchComplete = useCallback(() => {
        setFocusedIndex(-1);
        setShowCountryResults(false);
    }, []
    )


    const handleKeyDown = (e) => {
        const { key } = e;
        let nextIndexCount = 0;

        // move down
        if (key === "ArrowDown")
            nextIndexCount = (focusedIndex + 1) % results.length;

        // move up
        if (key === "ArrowUp")
            nextIndexCount = (focusedIndex + results.length - 1) % results.length;

        // hide search results
        if (key === "Escape") {
            resetSearchComplete();
        }

        // select the current item
        if (key === "Enter") {
            e.preventDefault();
            handleSelection(focusedIndex);
        }

        setFocusedIndex(nextIndexCount);
    };

    const handleChange = (e) => {
        setDefaulValue(e.target.name)
        onChange && onChange(e)
    }



    useEffect(() => {
        if (!resultContainer.current) return;
        resultContainer.current.scrollIntoView({
            block: 'center',
        })
    }, [focusedIndex]);

    useEffect(() => {
        if (results.length > 0 && !showCountryResults) return setShowCountryResults(true)
        if (results.length <= 0) return setShowCountryResults(false)
    }, [results, showCountryResults]);

    useEffect(() => {
        if (value) setDefaulValue(value)
    }, [value])

    useEffect(() => {
        dispatch(setCountries())
    }, [dispatch]);

    return (
        <div>
            <div
                tabIndex={1}
                onBlur={resetSearchComplete}
                onKeyDown={handleKeyDown}
                className={styles.search_container}
            >

                <input
                    value={defaultValue}
                    onChange={handleChange}
                    type={'text'}
                    placeholder='Busca aquí tu país'
                    className={styles.inputSearch}
                />
                {/* search results container */}
                {showCountryResults && (<div className={styles.showContainer} >
                    {results.map((item, index) => {
                        return (
                            <div
                                key={index}
                                onMouseDown={() => handleSelection(index)}
                                ref={index === focusedIndex ? resultContainer : null}
                                style={{
                                    backgroundColor: index === focusedIndex ? 'rgba(0,0,0,0.1)' : ''
                                }}

                            >
                                {renderItem(item)}
                            </div>)
                    })}
                </div>
                )}
            </div>
        </div>
    )
}

export default FormCountrySelected