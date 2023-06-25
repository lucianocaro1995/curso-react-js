import "./CartWidget.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const CartWidget = () => {
    //Recibimos el método cartTotal del componente CartContext
    const { cartTotal } = useContext(CartContext);

    //Si cartTotal es mayor a 0 no se muestra el contador-carrito
    return (
        <Link className="ver-carrito" to={"/cart"}>
            {cartTotal() > 0 && <span className="contador-carrito">{cartTotal()}</span>}
            <p className="item-carrito">🛒</p>
        </Link>
    );
}

export default CartWidget