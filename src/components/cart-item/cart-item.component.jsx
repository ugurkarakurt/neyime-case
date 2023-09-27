import { CartItemContainer, CartItemWrapper, RemoveButtonContainer } from './cart-item.styles';
import RemoveButton from '../../assets/images/icons/delete.svg'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartItem = ({ cartItem }) => {
  const { betName, odd, league, quantity } = cartItem;
  const { clearItemFromCart } = useContext(CartContext);

  const clearItemHandler = () => {
    clearItemFromCart(cartItem)
  };


  return (
    <CartItemContainer>
      <RemoveButtonContainer onClick={clearItemHandler} src={RemoveButton}></RemoveButtonContainer>
      <CartItemWrapper>
        <span className='name'>{betName}</span>
        <span className='price'>
          <span>{league}</span>
          {quantity} x ₺{odd}
        </span>
      </CartItemWrapper>
    </CartItemContainer>
  );
};

export default CartItem;
