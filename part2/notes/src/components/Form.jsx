import { useState } from 'react'

const Form = ({ addNote }) => {
    const [newNote, setNewNote] = useState('')

    const handleNoteChange = (event) => {
        console.log(event.target.value) // targets the value on input from the event of typing
        event.preventDefault()
        addNote(newNote)
        setNewNote("")
    }

    return (
        <form onSubmit={handleNoteChange}> 
            <input
                value={newNote}
                onChange={(event) => setNewNote(event.target.value)}
                placeholder='Add new note'
            />
            <button type="submit">Save</button>
        </form>)
}

export { Form }