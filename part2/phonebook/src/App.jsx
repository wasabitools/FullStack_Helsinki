import { useState, useEffect } from 'react'
import axios from 'axios'
import { Section } from './components/Section'
import { Form } from './components/Form'
import { ContactList } from './components/ContactList'
import { Filter } from './components/Filter'

function App() {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState("")

  const hook = () => {
    console.log('persons effect')
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }

  useEffect(hook, [])

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
