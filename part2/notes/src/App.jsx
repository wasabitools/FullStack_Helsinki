import './index.css'
import notesService from './services/notes'
import { useState, useEffect } from 'react'
import { Note } from './components/Note'
import { Form } from './components/Form'
import { Button } from './components/Button'
import { Notification } from './components/Notification'
import { Footer } from './components/Footer'

const App = () => {
  const [notes, setNotes] = useState([])
  const [showAll, setShowAll] = useState(true)
  const [error, setError] = useState("Arrrh naaarh! Errarrhrrhh!")

  const hook = () => {
    notesService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }

  useEffect(hook, [])

  const addNote = (newNote) => {
    //create a new note Object then with the setter add it to the previous notes
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
      id: String(notes.length + 1)
    }

    notesService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(oldNotes => [...oldNotes, returnedNote])
      })
  }

  const deleteNote = id => {
    notesService
      .deleted(id)
      .then(() => {
        setNotes(oldNotes => oldNotes.filter(note => note.id !== id))
      })
      .catch(error => {
        console.error(`Failed to delete the note ${id}`, error)
      })
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important === true)

  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    notesService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(n => n.id !== id ? n : returnedNote))
      })
      .catch(error => {
        setError(
          `Note '${note.content}' was already removed from server.`
        )
        setTimeout(() => {
          setError(null)
        }, 5000)
        setNotes(notes.filter(n => n.id !== id))
      })
  }
  return (
    <>
      <div>
        <h1>Notes</h1>
        <Notification message={error} />
        <Button showAll={showAll} setShowAll={setShowAll} />
        <ul>
          {/* Anti-pattern: array indexes as keys */}
          {notesToShow.map(note =>
            <Note
              key={note.id}
              note={note}
              toggleImportance={() => toggleImportanceOf(note.id)}
              deletion={() => deleteNote(note.id)} />
          )}
        </ul>
        <Form addNote={addNote} />
        <Footer />
      </div>
    </>
  )
}

export default App
