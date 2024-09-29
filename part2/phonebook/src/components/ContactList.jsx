import { Contact } from './Contact'
const ContactList = ({ contacts }) => {
    return (
        <ul>
            {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
            ))}
        </ul>
    )
}

export {ContactList}