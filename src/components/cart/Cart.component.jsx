import React from 'react';
import { useData } from '../../context/DataContext';
import CartItem from './CartItem.component';

const Cart = () => {
  const { cartItems, cartTotal } = useData();
  return (

    <>
      {!cartItems.length ? (
        <></>
      ) : (
        <div className='cart'>
          {cartItems.map((cartItem, index) => (
            <CartItem cartItem={cartItem} key={index} />
          ))}
          <span className='cart-total'>Toplam Tutar: {cartTotal} TL </span>
        </div>
      )}

    </>
  )
}

export default Cart;