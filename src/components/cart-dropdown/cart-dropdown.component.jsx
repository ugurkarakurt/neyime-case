import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';
import { UserContext } from '../../contexts/user.context';

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
  const { currentUser } = useContext(UserContext);

  const navigate = useNavigate();

  const goToBasketHandler = () => {
    currentUser ? navigate('/basket') : navigate('/auth');
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
      {cartItems.length ? (<Button children={'Go to Basket'} buttonType={'inverted'} onClick={goToBasketHandler} />) : null}
    </CartDropdownContainer>
  );
};

export default CartDropdown;
