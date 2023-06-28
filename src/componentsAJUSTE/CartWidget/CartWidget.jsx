import "./CartWidget.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const CartWidget = () => {
    const { cartTotal } = useContext(CartContext);

    return (
        <Link className="ver-carrito" to={"/cart"}>
            {cartTotal() > 0 && <span className="contador-carrito">{cartTotal()}</span>}
            <p className="item-carrito">🛒</p>
        </Link>
    );
}

export default CartWidget