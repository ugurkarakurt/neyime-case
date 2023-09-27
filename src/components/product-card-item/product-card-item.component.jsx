import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { ProductCardItemContainer, ProdcutCardItemHeader, ProdcutCardItemBody } from './product-card-item.styles';

const ProductCardItem = ({ props }) => {
  const { league, rowID, itemID, betName, title, odd, showBody } = props;

  const { addItemToCart, cartItems } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart({ league, rowID, itemID, betName, title, odd })
  };

  const existingCartItemID = cartItems.find((cartItem) => cartItem.itemID === itemID);


  return (
    <ProductCardItemContainer onClick={addProductToCart} showBody={showBody} existingCartItemID={existingCartItemID}>
      <ProdcutCardItemHeader>
        {title && title}
      </ProdcutCardItemHeader>
      {showBody && (
        <ProdcutCardItemBody>
          {odd && odd}
        </ProdcutCardItemBody>
      )}
    </ProductCardItemContainer>
  );
};

export default ProductCardItem;
