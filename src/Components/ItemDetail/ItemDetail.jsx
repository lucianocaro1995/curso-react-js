import { useEffect, useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../Context/CartContext";
import "./ItemDetail.css"

const ItemDetail = ({ producto }) => {
    const { addItem } = useContext(CartContext)
    const [item, setItem] = useState({});

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

    useEffect(() => {
        setItem(producto);
    }, [producto]);


    return (
        <div className="detalles">
            <div className="detalles-hijo">
                <img src={item.imagen} alt={item.titulo} className="detalles-imagen" />
                <div className="detalles-escrito">
                    <span>Categoría: {item.categoria}</span>
                    <span>{item.titulo}</span>
                    <span>{item.descripcion}</span>
                    <span>$ {item.precio}</span>
                    <ItemCount stock={item.stock} onAdd={onAdd} className="item-count" />
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;