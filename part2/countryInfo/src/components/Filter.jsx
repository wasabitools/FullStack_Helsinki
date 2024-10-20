import { useState } from "react"

export const Filter = ({ setCountry }) => {
    const [input, setInput] = useState("")

    const onSearch = (event) => {
        event.preventDefault()
        setCountry(input)
    }

    const handleChange = (event) => {
        const inputCountry = event.target.value
        setInput(inputCountry)
    }

    return (
        <form onSubmit={onSearch}>
            <input
                type="text"
                value={input}
                onChange={handleChange}
                placeholder="search for a country">
            </input>
        </form>
    )
}