import "./CartWidget.css"
import { Link } from 'react-router-dom'

const CartWidget = () => {
    return (
        <Link className='seeCarrito' to={"/cart"}>🛒</Link>
    )
}

export default CartWidget