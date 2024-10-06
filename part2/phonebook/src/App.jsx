import phonebookService from './services/phonebook'
import { useState, useEffect } from 'react'
import { Section } from './components/Section'
import { Form } from './components/Form'
import { ContactList } from './components/ContactList'
import { Filter } from './components/Filter'

function App() {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState("")

  const hook = () => {
    console.log('persons effect')
    phonebookService
      .getAll()
      .then(contacts => {
        console.log('promise fulfilled')
        setPersons(contacts)
      })
  }

  useEffect(hook, [])

  const addNewPerson = ({ newName, newNumber }) => {
    const newPerson = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1)
    }

    phonebookService
      .create(newPerson)
      .then(returnedPerson => {
        setPersons(oldPersons => [...oldPersons, returnedPerson])
      })
      .catch(error => {
        console.error('Error adding person', error)
      })
  }

  const editPersonNumber = (id, newNumber) => {
    const existingPerson = persons.find(person => person.id === id)
    const updatedPerson = { ...existingPerson, number: newNumber }

    phonebookService
      .update(id, updatedPerson)
      .then(returnedPerson => {
        setPersons(oldPersons =>
          oldPersons.map(person => person.id === id ? returnedPerson : person
          ))
      })
  }

  const deletePerson = (id) => {
    phonebookService
      .deleted(id)
      .then(() => {
        setPersons(oldPersons => oldPersons.filter(person => person.id !== id))
      })
      .catch((error) => {
        console.error(`Failed to delete the person ${id}`, error)
      })
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
      <Form addNewPerson={addNewPerson} persons={persons} editPersonNumber={editPersonNumber} />
      <Section title="Numbers" />
      <ContactList contacts={personsToShow} deletion={deletePerson} />
    </>
  )
}

export default App
