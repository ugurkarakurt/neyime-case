import { createContext, useState, useEffect } from 'react';

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

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.rowID === cartItemToRemove.rowID
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.rowID !== cartItemToRemove.rowID);
  }

  return cartItems.map((cartItem) =>
    cartItem.rowID === cartItemToRemove.rowID
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
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
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

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
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemToCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
    cartItems,
    setCartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
