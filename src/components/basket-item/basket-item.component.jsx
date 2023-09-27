import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { BasketItemContainer, BasketItemBodyInfo, BasketItemName, BasketItemLeague, BasketItemRate, BasketItemRemoveButton } from './basket-item.styles';

import RemoveButton from '../../assets/images/icons/delete.svg'

const BasketItem = ({ cartItem }) => {
  const { betName, league, odd } = cartItem;

  const { clearItemFromCart } = useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);

  return (
    <BasketItemContainer>
      <BasketItemLeague>
        {league}
      </BasketItemLeague>
      <BasketItemBodyInfo>
        <BasketItemName>
          {betName}
        </BasketItemName>
        <BasketItemRate>
          {odd}
        </BasketItemRate>
      </BasketItemBodyInfo>
      <BasketItemRemoveButton src={RemoveButton} onClick={clearItemHandler} />
    </BasketItemContainer>
  );
};

export default BasketItem;
