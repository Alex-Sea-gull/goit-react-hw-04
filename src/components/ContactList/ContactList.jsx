import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div className={s.wrapperListItem}>
      <ul className={s.contactListItem}>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
              deleteContact={deleteContact}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
