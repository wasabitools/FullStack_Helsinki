import { useState } from "react"

export const Filter = ({ countries, setSearchedCountries }) => {
    const [input, setInput] = useState("")

    const handleSearchChange = (event) => {
        const inputCountry = event.target.value
        setInput(inputCountry)

        const filtered = countries.filter(country =>
            country.name.common.toLowerCase().includes(inputCountry.toLowerCase())
        )

        setSearchedCountries(filtered)
    }

    return (
        <form>
            <input
                type="text"
                value={input}
                onChange={handleSearchChange}
                placeholder="search for a country">
            </input>
        </form>
    )
}