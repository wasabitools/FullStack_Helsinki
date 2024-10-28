import { Button } from "./Button"
import { useState } from "react"

export const Country = ({ countries, onSearchedCountries }) => {
    return (
        <ul>
            {countries.map((country) =>
                <li key={country.ccn3}>
                    {country.name.common}
                    <Button handleClick={() => onSearchedCountries(country)} title="Show" />
                </li>)}
        </ul>
    )
}