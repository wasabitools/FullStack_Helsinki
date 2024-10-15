import { useState } from 'react'
import { Button } from './Button'


// eslint-disable-next-line react/prop-types
const Form = ({ addNewPerson, editPersonNumber, persons }) => {
    const [newName, setNewName] = useState("")
    const [newNumber, setNewNumber] = useState("")

    const resetForm = () => {
        setNewName("")
        setNewNumber("")
    }

    const handlePersonChange = (event) => {
        event.preventDefault()
        // eslint-disable-next-line react/prop-types
        const existingPerson = persons.find(person => person.name === newName)

        if (!newName || !newNumber) {
            alert("Name and number cannot be empty.")
            return
        }

        if (existingPerson) {
            const confirmBox = window.confirm(
                `Do you really want to replace ${existingPerson.name}'s number?`
            )
            if (confirmBox) {
                editPersonNumber(existingPerson.id, newNumber)
            }
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