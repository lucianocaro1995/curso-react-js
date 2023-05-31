import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import productos from "../Json/productos.json";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                //Acá utilizo un ternario
                resolve(id ? productos.filter(item => item.categoria === id) : productos);
            }, 2000);
        });

        promesa.then((data) => {
            console.log(data);
            setItems(data);
        });
    }, [id]);

    return (
        <div>
            <h2>Lista de productos</h2>
            <ItemList productos={items} />
        </div>
    );
};

export default ItemListContainer;

// Acá recibimos un array de productos y se lo mandamos a ItemList
