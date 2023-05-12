import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <ul className="navbar justify-content-center list-unstyled">
            <li className="nav-item px-2">
                <a href='#' className='nav-link text-dark text-decoration-none'>Hombres</a>
            </li>
            |
            <li className="nav-item px-2">
                <a href='#' className='nav-link text-dark text-decoration-none'>Mujeres</a>
            </li>
            |
            <li className="nav-item px-2">
                <CartWidget />
            </li>
            |
        </ul>
    )
}

export default NavBar;

//Solamente un export por componente se puede utilizar
//El cartWidget debo hacerlo dentro del navBar por premisa de la entrega