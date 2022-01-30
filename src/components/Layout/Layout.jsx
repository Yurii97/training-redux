import {Outlet, Link} from 'react-router-dom'
import s from './Layout.module.css'

function Layout() {
    return (<>
    <div className={s.layout}>
        <Link to="/">Home</Link>
        <Link to='/counter'>Counter</Link>
        <Link to='/contacts'>Contacts</Link>
    </div>
        <Outlet />
    </>)
}

export default Layout;