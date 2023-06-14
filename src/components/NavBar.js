import { NavLink } from 'react-router-dom'
import './NavBar.css'

export const NavBar = () => {

    return (
        <div className='navbar'>
            <NavLink to={"/"}> HOME </NavLink>
            <NavLink to={"/login"}> LOGIN </NavLink>
            <NavLink to={"/register"}> REGISTER </NavLink>
            <NavLink to={"/contact"}> KONTAKT </NavLink>


        </div>

    )

}