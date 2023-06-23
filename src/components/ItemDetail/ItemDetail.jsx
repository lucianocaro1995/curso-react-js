import { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ producto }) => {
    const [item, setItem] = useState({});
    
    useEffect(() => {
        setItem(producto);
    }, [producto]);


    return (
        <div className='detail' key={producto?.idx}>
            {producto ? (
                <>
                    <img src={producto.imagen} alt={producto.titulo} />
                    <h3>{producto.titulo}</h3>
                    <h4>{producto.descripcion}</h4>
                    <h4>$ {producto.precio}</h4>
                    <h4>{producto.descripcion}</h4>
                    <ItemCount stock={producto.stock} />
                </>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};

export default ItemDetail;