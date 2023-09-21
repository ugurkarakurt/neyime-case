import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
  const { betName, rate, quantity } = cartItem;
  return (
    <div className='cart-item-container'>
      <div className='item-details'>
        <span className='name'>{betName}</span>
        <span className='price'>
          {quantity} x ${rate}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
