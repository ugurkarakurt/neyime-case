import React from 'react';
import { useData } from '../../context/DataContext';
import CartItem from './CartItem.component';

export default function Cart() {
  const { cartItems, cartTotal } = useData();
  console.log(cartTotal);
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
