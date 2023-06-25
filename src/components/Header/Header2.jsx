import "./Header2.css"
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from "react-router-dom"

const Header2 = () => {
    return (
        <div className="header2">
            <div className="header2-hijo">
                <NavLink className={"header2-navlink"} to={'/'}>
                    <img className="header2-logo" src="https://i.ibb.co/2vXM4s5/logo.png" alt="Imagen del logo" />
                    <h2 className="header2-titulo">La cueva gamer</h2>
                </NavLink>
                <CartWidget />
            </div>
        </div>
    )
}

export default Header2