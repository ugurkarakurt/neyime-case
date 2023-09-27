import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { CheckoutContainer, CheckoutItemHeader, CheckoutItemBody, CheckoutTotal, CheckoutItemContainer, CheckoutTotalContainer } from './checkout.styles';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  console.log(cartItems);

  return (
    <CheckoutContainer>
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
      <CheckoutTotalContainer>
        <CheckoutTotal>Total: ${cartTotal}</CheckoutTotal>
      </CheckoutTotalContainer>
    </CheckoutContainer>
  );
};

export default Checkout;
