import { useEffect } from "react";
import { useState } from "react";

const ItemCount = ({ stock }) => {
    const [cantidad, setCantidad] = useState(1);
    const [cantidadStock, setCantidadStock] = useState(stock);

    const decrementarStock = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    const incrementarStock = () => {
        if (cantidad < cantidadStock) {
            setCantidad(cantidad + 1);
        }
    };

    //onAdd para el botón "agregar al carrito". Descuenta al stock la cantidad de items seleccionados
    //El console log no funciona bien en la parte que dice cantidadStock
    const onAdd = () => {
        if (cantidad <= cantidadStock) {
            setCantidadStock(cantidadStock - cantidad);
            setCantidad(1);
            console.log("Seleccionaste: " + cantidad + " productos al carrito!\nTe quedan: " + cantidadStock + " productos disponibles!")
        }
    }

    //Este useEffect sirve para actualizar el stock de manera instantánea, sin tener que refresacar la página
    useEffect(() => {
        setCantidadStock(stock);
    }, [stock]);


    return (
        <div className="contador-padre">
            <div className="contador-hijo">
                <button className="restar" onClick={decrementarStock}>-</button>
                <div>{cantidad}</div>
                <button className="sumar" onClick={incrementarStock}>+</button>
            </div>
            <div className="contador-hijo">
                <button className="agregar-carrito" onClick={onAdd}>Agregar al carrito</button>
            </div>
        </div>
    );
};

export default ItemCount;