import { useContext } from "react"
import { dataContext } from "../DataContext/DataContext"

import "./Item.css"

const Item = () => {
    const { data } = useContext(dataContext);

    return data.map((product) => {
        return (
            <div className="card" key={product.id}>
                <div className="card-imagen">
                    <img src={product.img} alt="imagen del producto" />
                </div>
                <h3>{product.name}</h3>
                <h4>{product.price}$</h4>
                <button>ver detalle</button>
                <button>comprar</button>
            </div>
        )
    })
};

export default Item

//Acá estoy creando la card de cada producto