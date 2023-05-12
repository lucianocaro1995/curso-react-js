import Logo from './images/logo.png'

const Header = () => {
    return (
        <div className="container-fluid header">
            <div className="row bg-dark-subtle">
                <div className="col-md-6">
                    <img src={Logo} alt={"imagen del logo"} width={100} />
                </div>
                <div className="col-md-6 text-end">
                    <a href='#' className='text-dark'>Buscar</a> | <a href='#' className='text-dark'>Carrito</a>
                </div>
            </div>
        </div>
    )
}

export default Header;