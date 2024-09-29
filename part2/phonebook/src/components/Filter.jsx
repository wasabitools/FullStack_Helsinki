import { Button } from "./Button"

const Filter = ({ persons, newName }) => {
    const personExists = persons.includes(newName)

    const handlePersonFilter = (event) => {
        event.preventDefault()
        if (personExists) {
            return newPerson
        }
    }

    return (
        <form onSubmit={handlePersonFilter}>
            <div>
                filter: <input
                    placeholder='search contacts' />
            </div>
            <Button title="search" />
        </form>)
}

export { Filter }