import { useCallback, useRef, useState } from "react";
import SearchBoxInput from "../SearchBox/SearchBoxInput";
import FormTodoCountries from "./FormTodoCountries";


const FormCountryList = ({ results = [], renderItem, onChange, onSelect, value, onClose }) => {
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const resultContainer = useRef(null);
  const [showCountryResults, setShowCountryResults] = useState(false);
  const [defaultValue, setDefaultValue] = useState("");

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
    setDefaultValue(e.target.name)
    onChange && onChange(e)
  }


  return (
    <div>
      <SearchBoxInput value={value} onChange={handleChange} />
      {results() && results().map((country) => {
        return <FormTodoCountries
          id={country.id}
          name={country.name}
          flag={country.flag}
          onClose={onClose}
          key={country.id}
          onSelect={onSelect}
        />
      })
      }
    </div>
  )
}

export default FormCountryList