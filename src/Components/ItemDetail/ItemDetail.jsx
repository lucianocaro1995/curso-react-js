import { useEffect, useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../Context/CartContext";
import "./ItemDetail.css"

const ItemDetail = ({ producto }) => {
    //Vamos a necesitar del contexto la función addItem. Esta función la cree en el componente CartContext línea 20
    //CartContext es el nombre que le puse a mi contexto en el componente CartContext línea 4
    const { addItem } = useContext(CartContext)
    //Hook useState
    const [item, setItem] = useState({});



    //Función de orden superior, que vamos a estar pasando como parámetro al return en línea 35
    //Acá estoy recibiendo la cantidad
    const onAdd = (quantity) => {
        addItem(item, quantity);
    }



    //Hook useEffect nos permite ejecutar código en respuesta a cambios en variables, propiedades o estado dentro del componente
    //Acá lo utilizamos para mantener actualizado el estado "item" en función de los cambios en la prop "producto"
    //Cuando se pasa un nuevo objeto "producto" al componente "itemDetail", se actualiza el estado "item" con el valor de "producto"
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