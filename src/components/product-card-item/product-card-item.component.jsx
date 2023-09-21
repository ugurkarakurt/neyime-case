import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './product-card-item.styles.scss';

const ProductCardItem = ({ id, itemID, betName, title, rate }) => {
  const { addItemToCart, cartItems } = useContext(CartContext);
  const addProductToCart = () => addItemToCart({ id, itemID, betName, title, rate });

  const existingCartItemID = cartItems.find((cartItem) => cartItem.itemID === itemID);

  return (
    <div onClick={addProductToCart} className={`product-card-item-container ${existingCartItemID && 'active'}`}>
      <div className="product-card-item-header">
        {title && title}
      </div>
      <div className="product-card-item-body">
        {rate && rate}
      </div>
    </div>
  );
};

export default ProductCardItem;
