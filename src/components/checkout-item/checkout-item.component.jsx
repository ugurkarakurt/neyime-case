import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { CheckoutItemContainer, CheckoutItemBodyInfo, CheckoutItemName, CheckoutItemLeague, CheckoutItemRate, CheckoutItemRemoveButton } from './checkout-item.styles';

import RemoveButton from '../../assets/images/icons/delete.svg'

const CheckoutItem = ({ cartItem }) => {
  const { betName, league, odd } = cartItem;
  console.log(cartItem);

  const { clearItemFromCart } = useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <CheckoutItemLeague>
        {league}
      </CheckoutItemLeague>
      <CheckoutItemBodyInfo>
        <CheckoutItemName>
          {betName}
        </CheckoutItemName>
        <CheckoutItemRate>
          {odd}
        </CheckoutItemRate>
      </CheckoutItemBodyInfo>
      <CheckoutItemRemoveButton src={RemoveButton} onClick={clearItemHandler} />
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
