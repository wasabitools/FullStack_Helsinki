import { useState } from 'react'
import { Button } from './Button'


// eslint-disable-next-line react/prop-types
const Form = ({ addNewPerson, persons }) => {
    const [newName, setNewName] = useState("")
    const [newNumber, setNewNumber] = useState("")

    const resetForm = () => {
        setNewName("")
        setNewNumber("")
    }

    const handlePersonChange = (event) => {
        event.preventDefault()
        const personExists = persons.some(person => person.name === newName)

        
        if (!newName || !newNumber) {
            alert("Name and number cannot be empty.");
            return
        }

        if (personExists) {
            alert(`${newName} is already added to the phonebook.`);
            resetForm()
            return
        }
        addNewPerson({ newName, newNumber })
        resetForm()

    }
    return (
        <form onSubmit={handlePersonChange}>
            <div>
                name: <input value={newName}
                    onChange={(event => setNewName(event.target.value))}
                    placeholder='Add new name' />
            </div>
            <div>

                number: <input value={newNumber}
                    onChange={(event => setNewNumber(event.target.value))}
                    placeholder='Add new number' />
            </div>
            <br />
            <Button title="Add" />
        </form>
    )
}

export { Form }