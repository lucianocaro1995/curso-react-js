import "./Header.css"
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <div className="nav-container">
            <nav className="navbar">
                <NavLink to={'/'} className="navbar-titulo">La cueva gamer</NavLink>
                <ul className="navbar-ul">
                    <li className="navbar-li">
                        <NavLink to={'/categoria/notebooks'}>Notebooks</NavLink>
                    </li>
                    <li className="navbar-li">
                        <NavLink to={'/categoria/tablets'}>Tablets</NavLink>
                    </li>
                    <li className="navbar-li">
                        <NavLink to={'/categoria/celulares'}>Celulares</NavLink>
                    </li>
                </ul>
                <CartWidget />
            </nav>
        </div>
    )
}

export default Header