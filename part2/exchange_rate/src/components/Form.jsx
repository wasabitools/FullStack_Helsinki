import { useState } from 'react'
import { Button } from "./Button"


export const Form = ({ setCurrency }) => {
    const [value, setValue] = useState('')

    const onSearch = (event) => {
        event.preventDefault()
        setCurrency(value)
    }

    // dynamic currency filtering 
    const handleChange = (event) => {
        const inputCurrency = event.target.value.toUpperCase()
        setValue(inputCurrency)
    }

    return (
        <form onSubmit={onSearch}>
            <label>
                Currency:
                <input type='text' value={value} onChange={handleChange} placeholder="Enter currency code" />
            </label>
            <Button title="Exchange rate" />
        </form>
    )
}

