import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
  CartTotal
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  console.log(cartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };


  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.itemID} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      {cartItems.length ? (<CartTotal>₺ {cartTotal}</CartTotal>) : null}
      {cartItems.length ? (<Button children={'GO TO CHECKOUT'} buttonType={'inverted'} onClick={goToCheckoutHandler} />) : null}
    </CartDropdownContainer>
  );
};

export default CartDropdown;
