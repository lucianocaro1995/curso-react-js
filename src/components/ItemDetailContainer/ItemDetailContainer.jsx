import "./ItemDetailContainer.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import productos from "../Json/productos.json";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";
import Header from "../Header/Header";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {

    //Hook useState que nos permite almacenar y actualizar información en mis componentes
    const [item, setItem] = useState({});
    //Hook useState que nos permite cargar el loading
    const [loading, setLoading] = useState(true);
    //Hook useParams nos permite obtener y utilizar los parámetros de la URL en nuestros componentes
    const { id } = useParams();



    //Accedo a los productos desde el archivo .json
    //Idx le puse en el .json. Id le puse en el firebase (para diferenciarlos)
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
            //Cuando se completa el setItems le vamos a cambiar el estado, el setLoading lo vamos a pasar a false
            setItem({ id: resultado.id, ...resultado.data() });
            setLoading(false);
        });
    }, [id])



    return (
        //Llamamos al componente itemDetail, le damos un prop producto y un estado item
        //Si está cargando mostrame el componente Loading, sino mostrame ItemDetail
        <>
            <Header />
            {loading ? <Loading /> : <ItemDetail producto={item} />}
        </>
    )
}

export default ItemDetailContainer

// Este componente es bastante similar al ItemListContainer
// El useState o estado es similar al de ItemListContainer, pero acá sólo necesito hacérselo a un sólo item. Y el useState tiene que ser a un objeto, no a un array