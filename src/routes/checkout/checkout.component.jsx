import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import SlideEffect from '../../components/slide-effect/slide-effect.component';


import { CheckoutContainer, CheckoutItemHeader, CheckoutItemBody, CheckoutTotal, CheckoutItemContainer, CheckoutSummaryContainer, OrderSummary, OddsContainer } from './checkout.styles';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <SlideEffect />
      <CheckoutItemContainer>
        <CheckoutItemHeader>
          My Cart
        </CheckoutItemHeader>
        <CheckoutItemBody>
          {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.itemID} cartItem={cartItem} />
          ))}
        </CheckoutItemBody>
      </CheckoutItemContainer>
      <CheckoutSummaryContainer>
        <OrderSummary>
          <span>Ürünlerin Özeti</span>
          <span>{cartItems.length} Odds</span>
        </OrderSummary>
        <OddsContainer>
          {cartItems.map((cartItem) => (
            <span key={cartItem.itemID}>x{cartItem.odd}</span>
          ))}
        </OddsContainer>
        <CheckoutTotal>
          <span>Total :</span>
          <span>₺ {cartTotal}</span>
        </CheckoutTotal>
      </CheckoutSummaryContainer>
    </CheckoutContainer>
  );
};

export default Checkout;
