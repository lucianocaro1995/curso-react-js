import Item from "../Item/Item";

const ItemList = ({ productos }) => {
    return (
        <>
            {productos.map(producto => <Item key={producto.idx} producto={producto} />)}
        </>
    )
}

export default ItemList

// Acá generamos el map (del array que recibimos de ItemListContainer)