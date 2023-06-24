import "./ItemListContainer.css";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom"

//1)Este import es para acceder a los productos desde el archivo .json
//import productos from "../Json/productos.json";

//2)Este import es para acceder a un sólo documento
//import { getFirestore, doc, getDoc } from "firebase/firestore";

//3)Este import es para acceder a una colección de documentos
//import { getFirestore, collection, getDocs } from "firebase/firestore";

//4)Este import es para acceder a una colección de documentos utilizando un filtro
import { getFirestore, collection, getDocs, where, query } from "firebase/firestore";

//5)Este import es para el proceso de importación de los productos en mi archivo .json a firebase
//El addDoc me permite insertar un nuevo documento a mi base de datos de firebase
//import { getFirestore, collection, getDocs, where, query, addDoc } from "firebase/firestore";





const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();



    //1)Accedo a los productos desde el archivo .json
    //El retraso del setTimeOut lo utilizamos para simular el tiempo que tarda acceder a una api externa. No es necesario usarlo para trabajar con firebase
    /*
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
    */





    //2)Accedo a un producto desde firebase. Es decir, accedo a un documento
    //Es conveniente trabajarlo con un array vacío [] porque solamente se va a ejecutar una vez en el montaje de nuestra app
    /*
    useEffect(() => {
        //Le podemos poner cualquier nombre a la variable pero db es un nombre representativo
        const db = getFirestore();

        //Le pasamos 3 parámetros: variable, nombre de la colección, id del documento
        //Esto te trae un objeto en forma de respuesta
        const producto = doc(db, "productos", "FqntAyfZzbqTKHp5r61h");

        //Utilizamos esta función que trabaja como promesa, donde le pasamos la variable que tiene el resultado
        getDoc(producto).then(resultado => {
            //Esto sirve para validar, para saber si existe
            if (resultado.exists()) {
                setItems({ id: resultado.id, ...resultado.data() })
            } else {
                console.error("Error! No se encontró el producto");
            }
        });
    }, []);
    */





    //3)Accedo a varios productos desde firebase. Es decir, accedo a una colección de documentos
    //Es similar a acceder a un sólo producto
    //Tengo que hacer el paso 5) para cargar mis productos desde .json a Firebase y luego este paso para mostrarlos en la app

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "productos");
        //Filtro
        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;

        getDocs(q).then(resultado => {
            if (resultado.size > 0) {
                //Cuando se completa el setItems le vamos a cambiar el estado, el setLoading lo vamos a pasar a false
                setItems(resultado.docs.map(producto => ({ id: producto.id, ...producto.data() })));
                setLoading(false);
            } else {
                console.error("Error! No se encontraron productos en la colección!");
            }
        });
    }, [id]);





    //4) Acceder a varios productos desde firebase con un filtro
    //Sirve para cuando queremos buscar una categoria determinada, como el precio, el nombre, etc.
    /*
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "productos");

        //Condición para el filtro. No utilizar query en el nombre de la variable porque es palabra reservada
        //const q = query(itemsCollection, where("precio", ">", 450));
        //Utilizo un operador ternario para filtrar por categoría
        //Le podemos agregar tantos where como queramos para agregar más filtros
        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;

        getDocs(q).then(resultado => {
            if (resultado.size > 0) {
                setItems(resultado.docs.map(producto => ({ id: producto.id, ...producto.data() })))
            } else {
                console.error("Error! No se encontraron productos en la colección");
            }
        });
    }, [id]);
    */





    //5)Proceso de importación de los productos en mi archivo .json a firebase
    //Le pongo el array [] para que solamente se ejecute una vez durante el montaje de mi componente
    //Luego de que carguen los componentes en Firestore, ya puedo comentar o deshabilitar este useEffect. Hago esto para que no se vuelvan a cargar en Firestore cada vez que borro o re-escribo algo
    /*
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "productos")
        //Recorro el array con un forEach
        productos.forEach(producto => {
            addDoc(itemsCollection, producto);
        });

        console.log("Productos cargados en Firestore!");
    }, []);
    */



    return (
        //Si está cargando mostrame el componente Loading, sino mostrame ItemList
        <div className="item-list-container">
            <h2 className="titulo-productos">Compra por categorías</h2>
            <ul className="categorias">
                <li className="categorias-li">
                    <NavLink className={"categoria-link"} to={'/categoria/notebooks'}>
                        <img src="laptop.png" alt="" />
                        <span className="categoria-span">Notebooks</span>
                    </NavLink>
                </li>
                <li className="categorias-li">
                    <NavLink className={"categoria-link"} to={'/categoria/tablets'}>
                        <img src="tablet.png" alt="" />
                        <span className="categoria-span">Tablets</span>
                    </NavLink>
                </li>
                <li className="categorias-li">
                    <NavLink className={"categoria-link"} to={'/categoria/celulares'}>
                        <img src="tv.png" alt="" />
                        <span className="categoria-span">Tv</span>
                    </NavLink>
                </li>
                <li className="categorias-li">
                    <NavLink className={"categoria-link"} to={'/categoria/celulares'}>
                        <img src="monitor.png" alt="" />
                        <span className="categoria-span">Monitores</span>
                    </NavLink>
                </li>
                <li className="categorias-li">
                    <NavLink className={"categoria-link"} to={'/categoria/celulares'}>
                        <img src="pc.png" alt="" />
                        <span className="categoria-span">Pc</span>
                    </NavLink>
                </li>
                <li className="categorias-li">
                    <NavLink className={"categoria-link"} to={'/categoria/celulares'}>
                        <img src="smartphone.png" alt="" />
                        <span className="categoria-span">Celulares</span>
                    </NavLink>
                </li>
            </ul>
            <div className="seccion-productos">
                {loading ? <Loading /> : <ItemList productos={items} />}
                {/*
                //Cuando accedo a solamente un producto, debo escribir su html acá y deshabilitar o borrar el itemList de arriba ya que es un array de productos
                <div>
                    <img src={productos.imagen} alt={productos.nombre} />
                </div>
                <div>
                    <h2>{productos.nomobre}</h2>
                    <p>${productos.precio}</p>
                </div>
                */}
            </div>
            <Footer />
        </div>
    );
};

export default ItemListContainer;

//Acá recibimos un array de productos y se lo mandamos a ItemList