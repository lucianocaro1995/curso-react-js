import { createContext, useState } from 'react';

//1)Creamos la función createContext que nos permite definir un contexto
export const CartContext = createContext();

//2)Definimos el provider que después vamos a utilizar para envolver toda nuestra app de React
//Le tenemos que pasar un parámetro que va a ser la prop children
//Acá va a recibir todos los componentes que vamos a envolver de la app, va a recibir el contexto para que puedan acceder y heredar todas las funciones que vamos a estar definiendo acá
const CartContextProvider = ({ children }) => {
    //Creamos un array de productos vacío, va a tener su función modificadora setCart y un hook estado o useState
    const [cart, setCart] = useState([]);

    //3)Vamos a tener que crear los siguientes métodos:
    //addItem(item, quantity) para agregar cierta cantidad de un item al carrito
    //removeItem(itemId) para remover un item del cart usando su id
    //clear() para remover todos los items
    //isInCart:(id) para saber si es true o false
    //cartTotal: para calcular la cantidad de items en el carrito
    //sumTotal: para calcular el total del carrito, con precio y cantidad


    const addItem = (item, quantity) => {
        //Primero tenemos que validar si el producto está en el carrito. Item es el objeto así que le paso el id del objeto
        if (isInCart(item.id)) {
            let pos = cart.findIndex(producto => producto.id === item.id);
            //A la posición de mi producto en el array de objetos cart, le voy a sumar el parámetro quantity
            cart[pos].cantidad += quantity;
            //Actualizo el cart
            setCart([...cart]);
        } else {
            //En el caso de que no exista mi producto, debería agregarlo. Con los productos que había previamente (...cart) le agrego uno nuevo
            setCart([...cart, { ...item, cantidad: quantity }])
        }
    };

    const removeItem = (id) => {
        //Con el filtro estamos pidiendo que el carrito me devuelva todos los productos a excepción del que clickeamos, el que removimos
        //Filter nos devuelve un nuevo array. Si tomo el id 1 como parámetro, es distinto del 1? no, es igual, entonces lo descarta
        //items es un array de objetos, con el spread (...) desparramamos el array de objetos
        const items = cart.filter(producto => producto.id !== id);
        setCart([...items]);
    };

    const clear = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        //Devuelve true o false si el id tomado como parámetro es estrictamente igual al id
        return cart.some(producto => producto.id === id)
    };

    const cartTotal = () => {
        //A la función reduce hay que pasarle 2 parámetros, primero una función y después el valor inicial del acumulador
        return cart.reduce((acum, item) => acum += item.cantidad, 0);
    }

    const sumTotal = () => {
        return cart.reduce((acum, item) => acum += item.cantidad * item.precio, 0);
    }





    //4)Finalmente en el método return vamos a definir el provider
    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, cartTotal, sumTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;