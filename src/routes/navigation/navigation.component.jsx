import { Fragment, useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import FormInput from '../../components/form-input/form-input.component';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import NeyimeLogo from '../../assets/nesine-logo.png';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import LoginIcon from '../../assets/login.svg'
import LogoutIcon from '../../assets/logout.svg'
import BulletinIcon from '../../assets/soccer-ball.svg'

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
  SearchContainer,
  Logo
} from './navigation.styles';

const defaultFormFields = {
  search: ''
};

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { search } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
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
          <NavLink to='/bulletin'>
            <span>Bulletin</span>
            <img src={BulletinIcon} alt="bulletin_icon" />
          </NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              <span>
                Sign Out
              </span>
              <img src={LogoutIcon} alt="logout_icon" />
            </NavLink>
          ) : (
            <NavLink to='/auth'>
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
