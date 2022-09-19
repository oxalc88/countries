import CountryCard from "../CountryCard/CountryCard"
import './CountryList.css'

const CountryList = ({ countries }) => {

    return (
        <div className="CountryList">
            {countries.map((country) => {
                return <CountryCard name={country.name} continent={country.continent} key={country.id} capital={country.capital} flag={country.flag} />
            })}
        </div>
    )
}

CountryList.defaultProps = {
    countries: Array(10).fill('holi')
}

export default CountryList;
