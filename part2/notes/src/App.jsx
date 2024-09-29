import { useState } from 'react'
import { Note } from './components/Note'
import { Form } from './components/Form'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)

  const addNote = (newNote) => {
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
      id: String(notes.length + 1)
    }
    setNotes(oldNotes => [...oldNotes, noteObject])
  }

  return (
    <>
      <div>
        <h1>
          Notes
        </h1>
        <ul>
          {/* Anti-pattern: array indexes as keys */}
          {notes.map(note =>
            <Note key={note.id} note={note} />
          )}
        </ul>
        <Form addNote={addNote} />
      </div>
    </>
  )
}

export default App
