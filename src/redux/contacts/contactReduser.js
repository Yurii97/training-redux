const contactsReduser = (state={contacts:[],filter:''}, {type, payload})=>{
    switch(type){
        case 'contacts/add':
            return {...state, contacts:[payload, ...state.contacts]};
        case 'contacts/remove':
            return {...state, contacts:state.contacts.filter(contact=>contact.id!==payload)};
        case 'contacts/filter':
            return {...state, filter: payload};
        default: return state;
    }
}

export default contactsReduser;