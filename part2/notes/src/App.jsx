import { useState } from 'react'
import { Note } from './components/Note'
import { Form } from './components/Form'
import { Button } from './components/Button'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [showAll, setShowAll] = useState(true)

  const addNote = (newNote) => {
    //create a new note Object then with the setter add it to the previous notes
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
      id: String(notes.length + 1)
    }
    setNotes(oldNotes => [...oldNotes, noteObject])
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important === true)

  return (
    <>
      <div>
        <h1>
          Notes
        </h1>
        <Button showAll={showAll} setShowAll={setShowAll} />
        <ul>
          {/* Anti-pattern: array indexes as keys */}
          {notesToShow.map(note =>
            <Note key={note.id} note={note} />
          )}
        </ul>
        <Form addNote={addNote} />
      </div>
    </>
  )
}

export default App
