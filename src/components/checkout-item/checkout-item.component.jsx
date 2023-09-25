import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import { CheckoutItemContainer, CheckoutItemName, CheckoutItemLeague, CheckoutItemRate, CheckoutItemRemoveButton } from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
  const { betName, itemID, league, rate, rowID } = cartItem;
  console.log(cartItem);

  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <CheckoutItemContainer>
      <CheckoutItemLeague>
        {league}
      </CheckoutItemLeague>
      <CheckoutItemName>
        {betName}
      </CheckoutItemName>
      <CheckoutItemRate>
        {rate}
      </CheckoutItemRate>
      <CheckoutItemRemoveButton onClick={clearItemHandler}>
        &#10005;
      </CheckoutItemRemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
