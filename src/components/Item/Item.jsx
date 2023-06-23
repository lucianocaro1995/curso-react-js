import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
    return (
        <Link to={"/item/" + producto.idx}>
            <div className="card" key={producto.idx}>
                <div className="cardImagen">
                    <img src={producto.imagen} alt={producto.titulo} />
                </div>
                <div className="cardNombre">
                    <h3>{producto.titulo}</h3>
                    <h3>$ {producto.precio}</h3>
                </div>
            </div>
        </Link>
    )
}

export default Item

//Acá creo la card de cada producto
//Importante: en firebase y acá debo tener los mismos nombres en cada categoría de producto, es decir producto.titulo, producto.precio, etc. Deberíamos importar nuestro json a firebase para evitar estos posibles inconvenientes