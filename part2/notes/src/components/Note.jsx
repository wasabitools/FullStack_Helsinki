const Note = ({ note, toggleImportance, deletion }) => {
    const label = note.important
        ? 'make not important' : 'make important'

    return (
        <li className="note">
            {note.content}
            <button onClick={toggleImportance}>{label}</button>
            <button onClick={deletion}>Delete</button>
        </li >
    )
}

export { Note }