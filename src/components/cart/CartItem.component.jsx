import React from 'react'

export default function CartItem({ cartItem }) {
  return (
    <div className='cart-item'>
      <span>{cartItem.data.OCG[1].MBS}</span>
      <span>Kod: {cartItem.data.C}</span>
      <span>Maç: {cartItem.data.N}</span>
      <span>Oran: {cartItem.rate}</span>
    </div>
  )
}
