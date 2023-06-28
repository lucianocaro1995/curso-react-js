import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
    return (
        <Link to={"/item/" + producto.id} style={{ textDecoration: 'none' }}>
            <div className="card">
                <div className="card-hijo">
                    <div className="card-imagen">
                        <img src={producto.imagen} alt={producto.titulo} />
                    </div>
                    <div className="card-nombre">
                        <span>{producto.categoria}</span>
                        <span>{producto.titulo}</span>
                        <span>$ {producto.precio}</span>
                    </div>
                </div>
                <div className="card-boton">
                    <Link to={"/item/" + producto.id} style={{ textDecoration: 'none' }}><span className="card-span">Ver producto</span> </Link>
                </div>
            </div>
        </Link>
    )
}

export default Item

//Acá creo la card de cada producto
//Importante: en firebase y acá debo tener los mismos nombres en cada categoría de producto, es decir producto.titulo, producto.precio, etc. Deberíamos importar nuestro json a firebase para evitar estos posibles inconvenientes