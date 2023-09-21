import { Fragment, useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import FormInput from '../../components/form-input/form-input.component';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import NeyimeLogo from '../../assets/images/icons/nesine-logo.png';
import LoginIcon from '../../assets/images/icons/login.svg';
import LogoutIcon from '../../assets/images/icons/logout.svg';
import BulletinIcon from '../../assets/images/icons/soccer-ball.svg';

import buttonClickSound from '../../assets/audios/back.mp3';
import useSound from 'use-sound';

import { NavigationContainer, NavLinks, NavLink, LogoContainer, SearchContainer, Logo } from './navigation.styles';

const defaultFormFields = {
  search: ''
};

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const [click] = useSound(buttonClickSound, { volume: 1 });

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { search } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer onClick={click} to='/'>
          <Logo>
            <img src={NeyimeLogo} alt="" />
          </Logo>
        </LogoContainer>
        <SearchContainer>
          <FormInput
            label='Seacrh'
            type='text'
            onChange={handleChange}
            required
            name='search'
            value={search}
          />
        </SearchContainer>
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
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
