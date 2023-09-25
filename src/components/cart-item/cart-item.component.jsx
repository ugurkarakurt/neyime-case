import { CartItemContainer, CartItemWrapper } from './cart-item.styles'

const CartItem = ({ cartItem }) => {
  console.log(cartItem);
  const { betName, rate, league, quantity } = cartItem;
  return (
    <CartItemContainer>
      <CartItemWrapper>
        <span className='name'>{betName}</span>
        <span className='price'>
          <span>{league}</span>
          {quantity} x ₺{rate}
        </span>
      </CartItemWrapper>
    </CartItemContainer>
  );
};

export default CartItem;
