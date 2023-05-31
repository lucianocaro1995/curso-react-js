import { useEffect } from "react";
import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import productos from "../Json/productos.json";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos.find(item => item.idx === parseInt(id)));
            }, 2000);
        });

        promesa.then(data => {
            setItem(data);
        });
    }, [id]);

    return (
        <>
            <ItemDetail producto={item} />
        </>
    )
}

export default ItemDetailContainer

// Este componente es bastante similar al ItemListContainer
// El useState o estado es similar al de ItemListContainer, pero acá sólo necesito hacérselo a un sólo item. Y el useState tiene que ser a un objeto, no a un array