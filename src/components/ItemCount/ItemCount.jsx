import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock }) => {
    const [cantidad, setCantidad] = useState(1);
    const [cantidadStock, setCantidadStock] = useState(stock);
    const [productoAgregado, setProductoAgregado] = useState(false);

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

    //Evento onAdd
    //onAdd para el botón "agregar al carrito". Descuenta al stock la cantidad de items seleccionados
    //El console log no funciona bien en la parte que dice cantidadStock
    const onAdd = () => {
        if (cantidad <= cantidadStock) {
            setCantidadStock(cantidadStock - cantidad);
            setCantidad(1);
            setProductoAgregado(true);
            console.log("Seleccionaste: " + cantidad + " productos al carrito!\nTe quedan: " + cantidadStock + " productos disponibles!")
        }
    }

    //Este useEffect sirve para actualizar el stock de manera instantánea, sin tener que refrescar la página
    useEffect(() => {
        setCantidadStock(stock);
    }, [stock]);


    return (
        //Utilicé una técnica de rendering en el div que lleva los botones finalizar compra y agregar al carrito
        //Si productoAgregado está en false que me muestre el botón agregar al carrito. Si le doy agregar, que me lleve a finalizar compra
        <div className="contador-padre">
            <div className="contador-hijo">
                <button className="restar" onClick={decrementarStock}>-</button>
                <div>{cantidad}</div>
                <button className="sumar" onClick={incrementarStock}>+</button>
            </div>
            <div className="contador-hijo">
                {productoAgregado ? <Link to={"/cart"}>Finalizar compra</Link> : <button className="agregar-carrito" onClick={onAdd}>Agregar al carrito</button>}
            </div>
        </div>
    );
};

export default ItemCount;