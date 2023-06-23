import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import productos from "../Json/productos.json";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { id } = useParams();



    //Accedo a los productos desde el archivo .json
    /*
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
    */





    //Accedo a un producto desde firebase. Es decir, accedo a un documento
    useEffect(() => {
        const db = getFirestore();
        const producto = doc(db, "productos", id);
        getDoc(producto).then(resultado => {
            setItem({id:resultado.id, ...resultado.data()})
        });
    }, [id])



    return (
        //Llamamos al componente itemDetail, le damos un prop producto y un estado item
        <>
            <ItemDetail producto={item} />
        </>
    )
}

export default ItemDetailContainer

// Este componente es bastante similar al ItemListContainer
// El useState o estado es similar al de ItemListContainer, pero acá sólo necesito hacérselo a un sólo item. Y el useState tiene que ser a un objeto, no a un array