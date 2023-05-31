import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
    return (
        <Link to={"/item/" + producto.idx}>
            <div className='card' key={producto.idx}>
                <img src={producto.imagen} alt={producto.titulo} />
                <h3>{producto.titulo}</h3>
                <h4>$ {producto.precio}</h4>
            </div>
        </Link>
    )
}

export default Item

//Acá creo la card de cada producto