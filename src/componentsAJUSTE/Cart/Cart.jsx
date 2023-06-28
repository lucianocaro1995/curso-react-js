import "./Cart.css"
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

const Cart = () => {
    //Recibimos estos 5 métodos del contexto
    const { cart, removeItem, clear, cartTotal, sumTotal } = useContext(CartContext);

    //Tenemos que hacer el renderizado del carrito con if para cuando está vacío, y return cuando tiene items dentro
    if (cartTotal() === 0) {
        return (
            <>
                <Header />
                <div className="carrito">

                    <div className="carrito-header">
                    </div>


                    <div className="carrito-content2">
                        <p className="carrito-content-vacio">¡No hay productos agregados en el carrito!</p>
                    </div>

                    <div className="carrito-footer">
                        <button className="carrito-footer-vaciar" onClick={() => { clear() }} title="Vaciar Carrito">Vaciar Carrito</button>
                        <Link className="carrito-footer-finalizar" tp={"/checkout"}>Finalizar compra</Link>
                        <span className="carrito-footer-total">Total a Pagar: ${sumTotal()}</span>
                    </div>
                </div>
            </>
        )
    }

    //Tengo que armar el html del carrito acá
    return (
        <>
            <Header />
            <div className="carrito">

                <div className="carrito-header">
                    <span className="carrito-header-producto">Producto</span>
                    <span className="carrito-header-cantidad">Cantidad</span>
                    <span className="carrito-header-precio">Precio</span>
                </div>


                <div className="carrito-content">
                    {
                        cart.map(item => (
                            <div className="carrito-content-item" key={item.id}>
                                <img className="carrito-content-img" src={item.imagen} alt={item.titulo} />
                                <span className="carrito-content-titulo">{item.titulo}</span>
                                <span className="carrito-content-cantidad">{item.cantidad} x ${item.precio}</span>
                                <span className="carrito-content-precio">${item.cantidad * item.precio}</span>
                                <button className="carrito-content-eliminar" onClick={() => { removeItem(item.id) }} title="Eliminar Producto"> ❌ </button>
                            </div>
                        ))
                    }
                </div>


                <div className="carrito-footer">
                    <button className="carrito-footer-vaciar" onClick={() => { clear() }} title="Vaciar Carrito">Vaciar Carrito</button>
                    <Link className="carrito-footer-finalizar" to={"/checkout"}>Finalizar compra</Link>
                    <span className="carrito-footer-total">Total a Pagar: ${sumTotal()}</span>
                </div>
            </div>
        </>
    )
}

export default Cart