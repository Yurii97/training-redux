import { FilterInput } from './Filter.styled';
import {  useDispatch, useSelector } from 'react-redux'
import {contactsFilter} from '../../../redux/contacts/contactsAction'

export default function Filter({ filter, onChangeFilter }) {
  const dispatch = useDispatch()
  const contactsProp = useSelector(state=>state.contacts)

  const handleChangeFilter = e => {
    const value = e.target.value;
    dispatch(contactsFilter(value))    
  };

  return (
    <>
      <FilterInput>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={contactsProp.filter}
          onChange={handleChangeFilter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </FilterInput>
    </>
  );
}
