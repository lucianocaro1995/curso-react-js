import ItemCount from "../ItemCount/ItemCount";
import productos from "../Json/productos.json";

const ItemListContainer = () => {
    return (
        <div>
            <h2>Lista de productos</h2>
            <ItemCount stock={12}/>
        </div>
    )
}

export default ItemListContainer;