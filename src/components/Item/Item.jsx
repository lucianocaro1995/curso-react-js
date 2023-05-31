import "./Item.css";

const Item = ({ producto }) => {
    return (
        <div className='card' key={producto.idx}>
            <img src={producto.imagen} alt={producto.titulo} />
            <h3>{producto.titulo}</h3>
            <h4>{producto.precio}$</h4>
            <button>Ver detalle</button>
            <button>Agregar al carrito</button>
        </div>
    )
}

export default Item

//Acá creo la card de cada producto