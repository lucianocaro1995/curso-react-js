import ItemListContainer from "./ItemListContainer";

const NavBar = () => {
    return (
        <div className="container-fluid navbar">
            <div className="row bg-dark-subtle mx-auto">

                <div className="col">
                    <a href='#' className='text-dark'>Hombres</a> | <a href='#' className='text-dark'>Mujeres</a> | <a href='#' className='text-dark'>Carrito</a> | <a href='#' className='text-dark'>{ItemListContainer}</a>
                </div>

            </div>
        </div>
    )
}

export default NavBar;

//Solamente un export por componente se puede utilizar
//El cartWidget debo hacerlo dentro del navBar por premisa de la entrega