const Contact = ({ contact }) => {
    return (
        <li>{contact.name} : {contact.number} </li>
    )
}

export { Contact }