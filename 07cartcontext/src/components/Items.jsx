import React,{useContext} from 'react';
import { useCart } from '../context/Cart';

function Items(props) {
    const cart = useCart()
    console.log("cart",cart)
    return (

        <div className='item-card'>
            <h2>{props.name}</h2>
            <p>Price : ${props.price}</p>
            <button onClick={()=> cart.setItems([...cart.items, {name: props.name, price: props.price}])}>Add To Cart</button>

        </div>
    );
}

export default Items