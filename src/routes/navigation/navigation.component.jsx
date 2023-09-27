import { Fragment, useContext } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import Search from '../../components/search/search.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import NeyimeLogo from '../../assets/images/icons/nesine-logo.png';
import LoginIcon from '../../assets/images/icons/login.svg';
import LogoutIcon from '../../assets/images/icons/logout.svg';
import BulletinIcon from '../../assets/images/icons/soccer-ball.svg';

import buttonClickSound from '../../assets/audios/back.mp3';
import useSound from 'use-sound';

import { NavigationContainer, NavLinks, NavLink, LogoContainer, Logo } from './navigation.styles';


const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  const [click] = useSound(buttonClickSound, { volume: 1 });
  const location = useLocation();

  const path = location.pathname.startsWith('/bulletin/')

  return (
    <Fragment>
      <NavigationContainer path={path}>
        {isCartOpen && <CartDropdown />}

        <LogoContainer onClick={click} to='/'>
          <Logo>
            <img src={NeyimeLogo} alt="" />
          </Logo>
        </LogoContainer>
        <Search />
        <NavLinks>
          <NavLink onClick={click}
            to='/bulletin'>
            <span>Bulletin</span>
            <img src={BulletinIcon} alt="bulletin_icon" />
          </NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={() => { signOutUser(); click(); }}>
              <span>
                Sign Out
              </span>
              <img src={LogoutIcon} alt="logout_icon" />
            </NavLink>
          ) : (
            <NavLink onClick={click}
              to='/auth'>
              <span>Sign In</span>
              <img src={LoginIcon} alt="login_icon" />
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
