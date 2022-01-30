import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReduser from './counter/counterReduser';

const rootReduser = combineReducers({
counter: counterReduser,
})

const store = createStore(rootReduser, composeWithDevTools())

export default store