export const addContact = (contact)=>({
    type: 'contacts/add',
    payload: contact
})

export const removeContact = (id)=>({
    type: 'contacts/remove',
    payload: id
})

export const contactsFilter = (filter)=>({
    type: 'contacts/filter',
    payload: filter
})