import "./Cart.css"
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";

const Cart = () => {
    //Recibimos estos 5 métodos del contexto
    const { cart, removeItem, clear, cartTotal, sumTotal } = useContext(CartContext);

    //Tenemos que hacer el renderizado del carrito con if para cuando está vacío, y return cuando tiene items dentro
    if (cartTotal() === 0) {
        return (
            <div className="carritoVacio">
                <p>No se encontraron productos en el Carrito!</p>
            </div>
        )
    }

    //Tengo que armar el html del carrito acá
    return (
        <div className="carritoModal">


            <div className="carritoHeader">
                <h1>Carrito 🛒</h1>
            </div>


            <div className="carritoContent">
            </div>


        </div>
    )
}

export default Cart