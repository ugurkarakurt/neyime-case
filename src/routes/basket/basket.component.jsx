import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import BasketItem from '../../components/basket-item/basket-item.component';
import SlideEffect from '../../components/slide-effect/slide-effect.component';


import { BasketContainer, BasketItemHeader, BasketItemBody, BasketTotal, BasketItemContainer, BasketSummaryContainer, OrderSummary, OddsContainer } from './basket.styles';

const Basket = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <BasketContainer>
      <SlideEffect />
      <BasketItemContainer>
        <BasketItemHeader>
          My Cart
        </BasketItemHeader>
        <BasketItemBody>
          {cartItems.map((cartItem) => (
            <BasketItem key={cartItem.itemID} cartItem={cartItem} />
          ))}
        </BasketItemBody>
      </BasketItemContainer>
      <BasketSummaryContainer>
        <OrderSummary>
          <span>Ürünlerin Özeti</span>
          <span>{cartItems.length} Odds</span>
        </OrderSummary>
        <OddsContainer>
          {cartItems.map((cartItem) => (
            <span key={cartItem.itemID}>x{cartItem.odd}</span>
          ))}
        </OddsContainer>
        <BasketTotal>
          <span>Total :</span>
          <span>₺ {cartTotal}</span>
        </BasketTotal>
      </BasketSummaryContainer>
    </BasketContainer>
  );
};

export default Basket;
