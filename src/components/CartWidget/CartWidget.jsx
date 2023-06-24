import "./CartWidget.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const CartWidget = () => {
    //Recibimos el método cartTotal del componente CartContext
    const { cartTotal } = useContext(CartContext);

    return (
        //Si cartTotal es mayor a 0, mostrame el render de todo esto... "Sino" o "else" que se escribe con 2 puntos (:), no me muestres nada ("")
        (cartTotal() > 0) ?
            <Link to={"/cart"}>
                <p className="verCarrito">🛒</p>
                <span className="indicadorCarrito">{cartTotal()}</span>
            </Link>
            : ""
    )
}

export default CartWidget