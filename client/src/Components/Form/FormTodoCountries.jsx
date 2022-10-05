const FormTodoCountries = ({ value, onClose }) => {
  const countryReceived = [];
  const countryToSelect = countryReceived.push(value)

  // console.log(countryToSelect);
  // console.log(countryReceived);
  // console.log(value);
  // console.log(countryToSelect.name);
  return (
    <div>
      {/* <div>
        <button onClick={onClose}>x</button>
      </div> */}
      {/* <div>
        <img src={flag} alt={name} width={24} height={24} />
        <p>{name}</p>
        <input type='button' value='X' onClick={() => onClose(id)} />
      </div> */}

      {!countryToSelect && countryToSelect.map(v => (<div key={v.id}>
        <img src={v.flag} alt={v.name} width={24} height={24} />
        <p>{v.name}</p>
        <input type='button' value='X' onClick={() => onClose(v.id)} />
      </div>))
      }

    </div>
  )
}

export default FormTodoCountries