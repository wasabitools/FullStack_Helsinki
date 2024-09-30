import { useState } from 'react'
import { Section } from './components/Section'
import { Form } from './components/Form'
import { ContactList } from './components/ContactList'
import { Filter } from './components/Filter'

function App({ contacts }) {
  const [persons, setPersons] = useState(contacts)
  const [filter, setFilter] = useState("")

  const addNewPerson = ({ newName, newNumber }) => {
    const newPerson = {
      name: newName,
      number: newNumber,
      id: (persons.length + 1)
    }

    setPersons(oldPersons => [...oldPersons, newPerson])
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const personsToShow = filter === ""
    ? persons :
    persons.filter(person =>
      person.name.toLowerCase().includes(filter.toLowerCase())
    )

  return (
    <>
      <Section title="Phonebook" />
      <Filter persons={filter} handleFilterChange={handleFilterChange} />
      <Section title="Add new contact" />
      <Form addNewPerson={addNewPerson} persons={persons} />
      <Section title="Numbers" />
      <ContactList contacts={personsToShow} />
    </>
  )
}

export default App
