import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({producto}) => {
    return (
        <div className='detail' key={producto.idx}>
            <img src={producto.imagen} alt={producto.titulo} />
            <h3>{producto.titulo}</h3>
            <h4>{producto.descripcion}$</h4>
            <h4>$ {producto.precio}</h4>
            <button>Agregar al carrito</button>
            <ItemCount stock={producto.stock} />
        </div>
    )
}

export default ItemDetail