import { useState } from 'react'
import { Section } from './components/Section'
import { Form } from './components/Form'
import { ContactList } from './components/ContactList'
import { Filter } from './components/Filter'

function App({ contacts }) {
  const [persons, setPersons] = useState(contacts)

  const addNewPerson = ({ newName, newNumber }) => {
    const newPerson = {
      name: newName,
      number: newNumber,
      id: (persons.length + 1)
    }

    setPersons(oldPersons => [...oldPersons, newPerson])
  }

  return (
    <>
      <Section title="Phonebook" />
      <Filter persons={persons} />
      <Section title="Add new contact" />
      <Form addNewPerson={addNewPerson} persons={persons} />
      <Section title="Numbers" />
      <ContactList contacts={persons} />
    </>
  )
}

export default App
