import { Weather } from "./Weather"

export const Info = ({ country }) => {
    return <>
        <h3>{country.name.common}</h3>
        <img src={country.flag.svg} alt={`Flag of ${country.name.common}`} />
        <h5>Official name: {country.name.official}</h5>
        <h5>Capital: {country.capital[0]}</h5>
        <h5>Population: {country.population}</h5>
        <h5>Region: {country.region}</h5>
        <h5>Area: {country.area}</h5>
        <ul>Languages: {Object.entries(country.languages).map(([k, v]) => (<li key={k}>{v}</li>))}</ul >
        <ul>Timezone: {country.timezones.map((timezone, index) => <li key={index}>{timezone}</li>)}</ul >
        <Weather capital={country.capital[0]} />
    </>
}