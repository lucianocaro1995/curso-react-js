import Logo from './Images/logo.png'

const Header = () => {
    return (
        <div className="container-fluid header">
            <div className="row">

                <div className="col">
                    <img src={Logo} alt={"imagen del logo"} width={100} />
                </div>

                <div className="col text-end">
                    <h1>Mi precioso</h1>
                </div>

            </div>
        </div>
    )
}

export default Header;