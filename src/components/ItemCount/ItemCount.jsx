import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ItemCount.css"

//Ponemos onAdd como prop y se la mandamos a la función en línea 27
const ItemCount = ({ stock, onAdd }) => {
    const [items, setItems] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdded, setItemAdded] = useState(false);

    //Función para los botones
    const incrementarStock = () => {
        if (items < itemStock) {
            setItems(items + 1);
        }
    }

    const decrementarStock = () => {
        if (items > 1) {
            setItems(items - 1);
        }
    }

    //Evento onAdd
    //onAdd para el botón "agregar al carrito". Descuenta al stock la cantidad de items seleccionados
    //El console log no funciona bien en la parte que dice cantidadStock
    //Pasamos como parámetro la función items con onAdd(items)
    const addToCart = () => {
        if (items <= itemStock) {
            setItemStock(itemStock - items);
            setItems(1);
            setItemAdded(true);
            onAdd(items);
            console.log("Seleccionaste: " + items + " Productos al Carrito!\nTe quedan: " + itemStock + " Productos disponibles!");
        }
    }

    //Este useEffect sirve para actualizar el stock de manera instantánea, sin tener que refrescar la página
    useEffect(() => {
        setItemStock(stock);
    }, [stock]);


    return (
        //Utilicé una técnica de rendering en el div que lleva los botones finalizar compra y agregar al carrito
        //Si itemAdded está en false que me muestre el botón agregar al carrito. Si le doy agregar, que me lleve a finalizar compra
        <div className="item-count">
            <div className="item-count-contador">
                <button className="restar" onClick={decrementarStock}>-</button>
                <div className="cantidad">{items}</div>
                <button className="sumar" onClick={incrementarStock}>+</button>
            </div>
            <div className="item-count-boton">
                {itemAdded ? <Link className="finalizar-compra" to={"/cart"}>Finalizar compra</Link> : <button className="agregar-carrito" onClick={addToCart}>Agregar al carrito</button>}
            </div>
        </div>
    );
};

export default ItemCount;