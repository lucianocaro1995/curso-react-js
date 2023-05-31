import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="nav-container">
            <nav className="navbar">
                <h1 className="navbar-titulo">Gamingshop</h1>
                <ul className="navbar-ul">
                    <li className="navbar-li">
                        <a href='#'>Notebooks</a>
                    </li>
                    <li className="navbar-li">
                        <a href='#'>Tablets</a>
                    </li>
                    <li className="navbar-li">
                        <a href='#'>Celulares</a>
                    </li>
                </ul>
                <CartWidget />
            </nav>
        </div>
    )
}

export default NavBar