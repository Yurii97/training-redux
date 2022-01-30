import './App.css';
import Layout from './components/Layout/Layout.jsx'
import Counter from './components/Counter/Counter.jsx'
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home/Home.jsx";
import ContactsPage from './page/ContactsPage/ContactsPage'

function App() {
  return (<Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Home/>}/>
      <Route path='counter' element={ <Counter/>}/>
      <Route path="contacts" element={<ContactsPage/>}/>
    </Route>
  </Routes>)
    
}

export default App;