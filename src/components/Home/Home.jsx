import NavBar from '../NavBar/NavBar'
import Banner from '../Banner/Banner'
import Item from '../Item/Item'
import "./Home.css"

const Home = () => {
    return (
        <>
            <NavBar />
            <Banner />
            <div className='product-card-container'>
                <Item />
            </div>
        </>
    )
}

export default Home

//Con la extensión ES 7 puedo escribir "rafce" y clickeando enter se crea la función flecha instantáneamente
//No es necesario el "import React from 'react'". Si quiero lo puedo borrar y no pasa nada
//Solamente un export por componente se puede utilizar
//Necesito utilizar fragments <></> para poder utilizar más de un elemento padre en el mismo componente. Es como un contenedor