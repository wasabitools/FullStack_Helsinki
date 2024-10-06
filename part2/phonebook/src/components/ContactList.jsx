import { Contact } from './Contact'

const ContactList = ({ contacts, deletion }) => {
    return (
        <ul>
            {contacts.map(contact => (
                <Contact
                    key={contact.id}
                    contact={contact}
                    deletion={() => deletion(contact.id)} />
            ))}
        </ul>
    )
}

export { ContactList }