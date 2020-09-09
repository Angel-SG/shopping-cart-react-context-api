import React, { useContext } from 'react';
import cartContext from '../context/cart-context';

const Cart = () => {

    const cart = useContext(cartContext);
    console.log(cart);

    return (
        <div className="cart-container">
            <p>{cart.counter}</p>
        </div>
    )

}

export default Cart;