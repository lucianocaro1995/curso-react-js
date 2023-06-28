import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Cart from "../Cart/Cart";
import "./Checkout.css"
import { Link } from "react-router-dom";

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");
    const { cart, sumTotal } = useContext(CartContext);

    const generarOrden = () => {
        if (nombre.length === 0) {
            return false;
        }

        if (email.length === 0) {
            return false;
        }

        if (telefono.length === 0) {
            return false;
        }

        const buyer = { name: nombre, phone: telefono, email: email }
        const items = cart.map(item => ({ id: item.id, title: item.titulo, price: item.precio }));
        const fecha = new Date();
        const date = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}`;
        const total = sumTotal();
        const order = { buyer: buyer, items: items, date: date, total: total };

        const db = getFirestore();
        const OrdersCollection = collection(db, "orders");
        addDoc(OrdersCollection, order).then(resultado => {
            setOrderId(resultado.id);
        })
            .catch(resultado => {
                console.log("Error! No se pudo completar la compra!");
            });
    }

    return (
        <>
            <Cart />
            <div className="checkout">
                <div className="checkout-hijo">

                    <h1 className="checkout-titulo">¡Generar orden de compra!</h1>
                    <Link className="checkout-salir" to={"/cart"}> ❌ </Link>

                    <form className="checkout-form">
                        <div className="checkout-form-div">
                            <label className="checkout-label">Nombre</label>
                            <input className="checkout-input" type="text" onInput={(e) => { setNombre(e.target.value) }} />
                        </div>
                        <div className="checkout-form-div">
                            <label className="checkout-label">Email</label>
                            <input className="checkout-input" type="text" onInput={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="checkout-form-div">
                            <label className="checkout-label">Teléfono</label>
                            <input className="checkout-input" type="text" onInput={(e) => { setTelefono(e.target.value) }} />
                        </div>
                        <button className="checkout-generar-orden" type="button" onClick={generarOrden}>Generar Orden</button>
                    </form>

                    <div>
                        {orderId ? <div>
                            <h2 className="checkout-realizado">Gracias por tu compra! Tu orden de compra es: {orderId}</h2>
                        </div> : ""}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout;