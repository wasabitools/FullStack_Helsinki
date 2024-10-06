const Contact = ({ contact, deletion }) => {
    return (
        <li>{contact.name} : {contact.number}
            <button onClick={() => {
                const confirmBox = window.confirm(
                    `Do you really want to delete ${contact.name}?`
                )
                if (confirmBox) {
                    deletion()
                }
            }}>Delete</button>
        </li >
    )
}

export { Contact }