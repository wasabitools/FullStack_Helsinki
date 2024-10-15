import './index.css'
import phonebookService from './services/phonebook'
import { ContactList } from './components/ContactList'
import { Filter } from './components/Filter'
import { Form } from './components/Form'
import { Footer } from './components/Footer'
import { Notification } from './components/Notification'
import { Section } from './components/Section'
import { useState, useEffect } from 'react'



function App() {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState("")
  const [notification, setNotification] = useState({ message: null, type: "" })

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

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification({ message: null, type: "" });
    }, 2000);
  }

  const addNewPerson = async ({ newName, newNumber }) => {
    const newPerson = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1)
    }

    try {
      const returnedPerson = await phonebookService.create(newPerson)
      setPersons(oldPersons => [...oldPersons, returnedPerson])
      showNotification(`${newPerson.name} was added!`, "success")
    } catch (error) {
      showNotification(`Failed to add ${newPerson.name}.`, "error");
    }
  }

  const editPersonNumber = async (id, newNumber) => {
    const existingPerson = persons.find(person => person.id === id)
    const updatedPerson = { ...existingPerson, number: newNumber }

    try {
      const returnedPerson = await phonebookService.update(id, updatedPerson)
      setPersons(oldPersons =>
        oldPersons.map(person => person.id === id ? returnedPerson : person
        ))
    } catch (error) {
      if (error.response && error.response.status === 404) {
        showNotification(`${existingPerson.name} has been removed from the server.`, "error")
      } else {
        showNotification(`Failed to update ${existingPerson.name}.`, "error")
      }
    }
  }

  const deletePerson = async (id) => {
    const deletedPerson = persons.find(person => person.id === id)
    try {
      await phonebookService.deleted(id)
      const updatedPersons = await phonebookService.getAll()
      setPersons(updatedPersons)
    } catch (error) {
      showNotification(`${deletedPerson.name} has been deleted already.`, "error")

    }
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
      <Notification message={notification.message} type={notification.type} />
      <Filter persons={filter} handleFilterChange={handleFilterChange} />
      <Section title="Add new contact" />
      <Form addNewPerson={addNewPerson} persons={persons} editPersonNumber={editPersonNumber} />
      <Section title="Numbers" />
      <ContactList contacts={personsToShow} deletion={deletePerson} />
      <Footer />
    </>
  )
}

export default App
