import { useSelector, useDispatch } from 'react-redux'
import Contact from '../Contact/Contact';
import { ListStyled } from './ContactList.styled';
import {removeContact} from '../../../redux/contacts/contactsAction'

export default function ContactList() {
  const dispatch = useDispatch()
  const contactsProp = useSelector(state=>state.contacts)
  
  return (
    <>
      <section>
        <ListStyled>
          {contactsProp.contacts
            .filter(contact =>
              contact.name.toLowerCase().includes(contactsProp.filter.toLowerCase())
            )
            .map(({ id, name, number }) => (
              <li key={id}>
                <Contact
                  id={id}
                  name={name}
                  number={number}
                  deleteContact={(id)=>dispatch(removeContact(id))}
                />
              </li>
            ))}
        </ListStyled>
      </section>
    </>
  );
}
