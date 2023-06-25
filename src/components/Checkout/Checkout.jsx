import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");
    const { cart, sumTotal } = useContext(CartContext);

    //Creo la función generar orden, y después se la paso al botón de generar orden en el onClick
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


        //Todos los datos del comprador lo vamos a guardar en una colección en firebase, podemos llamarla orders
        //Insertar un Documento en Firestore. Donde dice "orders" tenemos que poner el nombre de nuestra colección a la que queremos crearle un documento
        //Con esto nos enteramos que el usuario compró, y le podemos decir al final la orden de compra
        const db = getFirestore();
        const OrdersCollection = collection(db, "orders");
        addDoc(OrdersCollection, order).then(resultado => {
            setOrderId(resultado.id);
        })
            .catch(resultado => {
                console.log("Error! No se pudo completar la compra!");
            });

        // Editar un Documento en Firestore
        //const db = getFirestore();
        /* const orderDoc = doc(db, "orders", orderId);
        updateDoc(orderDoc, {total:10000, cant:2}); */

        // Editar varios documentos en batch en Firestore
        /* const batch = writeBatch(db);
        const doc1 = doc(db, "orders", "guPBLl2K1oYLGD91YdfG");
        const doc2 = doc(db, "orders", "hzEug3rxs2sqbvsINviL");
        batch.update(doc1, {date:"2023-05-25 20:23"});
        batch.update(doc2, {total:20000});
        batch.commit(); */
    }

    //Formulario pidiendo nombre, email, telefono y abajo un boton de submit. Al costado los productos seleccionados
    //En los inputs podemos utilizar el evento onInput para que cada vez que tipeamos, vamos almacenando el valor en un estado
    //Capturamos el evento onInput y se lo vamos a pasar a la función modificadora (setNombre) del useState
    //E es evento, target es un método con el cual determinamos de dónde se disparó el evento, value es la propiedad que captura el valor
    return (
        <div className="checkout">
            <div className="checkout-hijo">
                <h1 className="checkout-titulo">Generar orden de compra</h1>
                <button className="checkout-salir"> ❌ </button>

                <form>
                    <div>
                        <label>Nombre</label>
                        <input type="text" onInput={(e) => { setNombre(e.target.value) }} />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" onInput={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div>
                        <label>Teléfono</label>
                        <input type="text" onInput={(e) => { setTelefono(e.target.value) }} />
                    </div>
                    <button type="button" onClick={generarOrden}>Generar Orden</button>
                </form>

                <div>
                    {orderId ? <div>
                        <h1>Gracias por tu Compra!</h1>
                        <p>Tu Orden de Compra es: {orderId}</p>
                    </div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;