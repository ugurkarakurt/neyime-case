import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles';

import buttonClickSound from '../../assets/audios/back.mp3';
import useSound from 'use-sound';
import { useLocation } from 'react-router-dom';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const location = useLocation();
  const path = location.pathname.startsWith('/bulletin/');

  const [click] = useSound(buttonClickSound, { volume: 1 });

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={() => { toggleIsCartOpen(); click(); }}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount path={path}>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
