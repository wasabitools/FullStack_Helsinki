import { useState } from "react"

export const Filter = ({ countries, setSearchedCountries }) => {
    const [input, setInput] = useState("")

    const handleSearchChange = (event) => {
        const inputCountry = event.target.value
        setInput(inputCountry)

        const filtered = countries.filter(country =>
            country.name.common.toLowerCase().includes(inputCountry.toLowerCase())
        )

        if (filtered.length > 6) {
            setSearchedCountries([{ name: { common: "Too many results, refine your search" } }]);
        } else {
            setSearchedCountries(filtered.slice(0, 6));
        }
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