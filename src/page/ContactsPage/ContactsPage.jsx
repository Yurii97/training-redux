
import { useSelector } from 'react-redux'
import ContactForm from '../../components/Contacts/ContactForm/ContactForm'
import ContactList from '../../components/Contacts/ContactList/ContactList'
import Filter from '../../components/Contacts/Filter/Filter'

function ContactsPage (){
    const contactsProp = useSelector(state=>state.contacts)
    return(
        <div>            
            <ContactForm/>
            <Filter/>
            {contactsProp.contacts&&<ContactList/>}
            
        </div>
    )
}
export default ContactsPage