import { useState } from 'react';
import { nanoid } from 'nanoid';
import { FormStyled } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import {addContact} from '../../../redux/contacts/contactsAction'

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contactsProp = useSelector(state=>state.contacts);
  const dispatch = useDispatch();
  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const submitForm = e => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    if (
      contactsProp.contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      setNumber('');
    setName('');
      // toast.error('contact with such name already exists');
      return;
    }
    dispatch(addContact(newContact));    
    // toast.success('contact added');
  
    setNumber('');
    setName('');
  };

  return (
    <>
      <FormStyled onSubmit={submitForm}>
        <label>
          Name
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            onChange={handleChange}
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </FormStyled>
    </>
  );
}
