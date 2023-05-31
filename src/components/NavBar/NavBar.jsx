import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="nav-container">
            <nav className="navbar">
                <h1 className="navbar-titulo">Shop</h1>
                <ul className="navbar-ul">
                    <li className="navbar-li">
                        <a href='#'>Ficción</a>
                    </li>
                    <li className="navbar-li">
                        <a href='#'>Misterio</a>
                    </li>
                    <li className="navbar-li">
                        <a href='#'>Romance</a>
                    </li>
                </ul>
                <CartWidget />
            </nav>
        </div>
    )
}

export default NavBar