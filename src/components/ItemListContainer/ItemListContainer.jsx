import React, { useState, useEffect } from 'react';
import ItemList from "../ItemList/ItemList";
import productos from "../Json/productos.json";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });

        promesa.then((data) => {
            console.log(data);
            setItems(data);
        });
    }, []);

    return (
        <div>
            <h2>Lista de productos</h2>
            <ItemList productos={items} />
        </div>
    );
};

export default ItemListContainer;

// Acá recibimos un array de productos y se lo mandamos a ItemList
