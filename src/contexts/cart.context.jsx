import { createContext, useState, useEffect, useContext } from 'react';
import { AlertContext } from './alert.context';

const addCartItem = (cartItems, productToAdd) => {

  const existingCartItem = cartItems.find((cartItem) => cartItem.rowID === productToAdd.rowID);

  if (existingCartItem) {
    const existingCartItemID = cartItems.find((cartItem) => cartItem.itemID === productToAdd.itemID);

    if (existingCartItemID) {
      return cartItems.filter((cartItem) => cartItem.rowID !== productToAdd.rowID);
    }

    if (!existingCartItemID) {
      return cartItems.map((cartItem) => {
        if (cartItem.rowID === productToAdd.rowID) {
          return { ...cartItem, odd: productToAdd.odd, itemID: productToAdd.itemID }
        } else {
          return cartItem;
        }
      }
      )
    }
  }

  if (!existingCartItem) {
    return [...cartItems, { ...productToAdd }]
  }
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.rowID !== cartItemToClear.rowID);

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => { },
  cartItems: [],
  addItemToCart: () => { },
  removeItemFromCart: () => { },
  clearItemFromCart: () => { },
  cartCount: 0,
  cartTotal: 1,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(1);

  const { setAlert } = useContext(AlertContext)


  useEffect(() => {
    const newCartCount = cartItems.length;
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total * cartItem.odd,
      1
    );

    setCartTotal(newCartTotal.toFixed(2));
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    const cartItemLenght = cartItems.length;
    const newCartItemLenght = addCartItem(cartItems, productToAdd).length
    setCartItems(addCartItem(cartItems, productToAdd));

    if (cartItemLenght < newCartItemLenght) {
      setAlert({
        isShow: true,
        alertType: 'success',
        message: 'Odd Added'
      });
      return;
    }

    if (cartItemLenght === newCartItemLenght) {
      setAlert({
        isShow: true,
        alertType: 'info',
        message: 'Odd Updated'
      });
      return;
    }

    if (cartItemLenght > newCartItemLenght) {
      setAlert({
        isShow: true,
        alertType: 'danger',
        message: 'Odd Removed'
      });
      return;
    }
  };

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear, setAlert));
    setAlert({
      isShow: true,
      alertType: 'danger',
      message: 'Odd Removed'
    });
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    clearItemFromCart,
    cartItems,
    setCartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
