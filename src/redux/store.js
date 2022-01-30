import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReduser from './counter/counterReduser';
import contactsReduser from './contacts/contactReduser';

const rootReduser = combineReducers({
counter: counterReduser,
contacts: contactsReduser,
})

const store = createStore(rootReduser, composeWithDevTools())

export default store