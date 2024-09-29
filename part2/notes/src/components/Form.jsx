import { useState } from 'react'

const Form = ({ addNote }) => {
    // create an empty state for the new note input
    const [newNote, setNewNote] = useState('')

    const handleNoteChange = (event) => {
        // when the form is submitted the prop addNote is added
        console.log(event.target.value) // targets the value on input from the event of typing
        event.preventDefault()
        addNote(newNote)
        setNewNote("")
        //the setter is an empty string again so the input is ready for the next note
    }

    return (
        <form onSubmit={handleNoteChange}> 
            <input
                value={newNote}
                onChange={(event) => setNewNote(event.target.value)}
                placeholder='Add new note'
                //the onChange will trigger the event of setting the newNote with the typed value
            />
            <button type="submit">Save</button>
        </form>)
}

export { Form }