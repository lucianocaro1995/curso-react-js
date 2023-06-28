import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ItemCount.css"

const ItemCount = ({ stock, onAdd }) => {
    const [items, setItems] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdded, setItemAdded] = useState(false);

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

    const addToCart = () => {
        if (items <= itemStock) {
            setItemStock(itemStock - items);
            setItems(1);
            setItemAdded(true);
            onAdd(items);
            console.log("Seleccionaste: " + items + " Productos al Carrito!\nTe quedan: " + itemStock + " Productos disponibles!");
        }
    }

    useEffect(() => {
        setItemStock(stock);
    }, [stock]);


    return (
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