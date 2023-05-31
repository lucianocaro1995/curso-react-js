import "./App.css"
import NavBar from "./Components/NavBar/NavBar"
import Banner from "./Components/Banner/Banner"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"


const App = () => {
    return (
        <>
            <NavBar />
            <Banner />
            <div className='product-card-container'>
                <ItemListContainer />
            </div>
        </>
    )
}

export default App

//Con la extensión ES 7 puedo escribir "rafce" y clickeando enter se crea la función flecha instantáneamente
//No es necesario el "import React from 'react'". Si quiero lo puedo borrar y no pasa nada
//Solamente un export por componente se puede utilizar
//Necesito utilizar fragments <></> para poder utilizar más de un elemento padre en el mismo componente. Es como un contenedor
//Tengo que poner el ItemListContainer