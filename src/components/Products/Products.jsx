import { useContext } from "react"
import { dataContext } from "../DataContext/DataContext"

import "./Products.css"

const Products = () => {
    const { data } = useContext(dataContext);

    return data.map((product) => {
        return (
            <div className="card">
                <img src={product.img} alt="imagen del producto" />
                <h3>{product.name}</h3>
                <h4>{product.price}$</h4>
                <button>ver detalle</button>
                <button>comprar</button>
            </div>
        )
    })
};

export default Products