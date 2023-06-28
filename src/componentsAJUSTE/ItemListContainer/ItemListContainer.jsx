import "./ItemListContainer.css";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import { getFirestore, collection, getDocs, where, query } from "firebase/firestore";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "productos");
        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;

        getDocs(q).then(resultado => {
            if (resultado.size > 0) {
                setItems(resultado.docs.map(producto => ({ id: producto.id, ...producto.data() })));
                setLoading(false);
            } else {
                console.error("Error! No se encontraron productos en la colección!");
            }
        });
    }, [id]);

    return (
        <>
            <Header />
            <Banner />
            <div className="item-list-container">
                <h2 className="titulo-productos">Compra por categorías</h2>
                <Navbar />
                <div className="seccion-productos">
                    {loading ? <Loading /> : <ItemList productos={items} />}
                </div>
                <Footer />
            </div>
        </>
    );
};

export default ItemListContainer;