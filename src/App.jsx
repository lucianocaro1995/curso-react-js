import "./App.css"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"
import Cart from "./Components/Cart/Cart"
import Checkout from "./Components/Checkout/Checkout"
import Error404 from "./Components/Error404"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CartContextProvider from "./Components/Context/CartContext"


const App = () => {
    return (
        <>
            <CartContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path={"/"} element={<Home />} />
                        <Route path={"/categoria/:id"} element={<ItemListContainer />} />
                        <Route path={"/item/:id"} element={<ItemDetailContainer />} />
                        <Route path={"/cart"} element={<Cart />} />
                        <Route path={"/checkout"} element={<Checkout />} />
                        <Route path={"/*"} element={<Error404 />} />
                    </Routes>
                </BrowserRouter>
            </CartContextProvider>
        </>
    )
}

const Home = () => {
    return (
        <>
            <ItemListContainer />
        </>
    );
};

export default App

//Con la extensión ES 7 puedo escribir "rafce" y clickeando enter se crea la función flecha instantáneamente
//No es necesario el "import React from 'react'". Si quiero lo puedo borrar y no pasa nada
//Solamente un export por componente se puede utilizar
//Necesito utilizar fragments <></> para poder utilizar más de un elemento padre en el mismo componente. Es como un contenedor