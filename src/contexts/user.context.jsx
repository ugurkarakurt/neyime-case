import { createContext, useContext, useState, useEffect } from 'react';
import { AlertContext } from './alert.context';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  const { showAlert } = useContext(AlertContext)

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
        showAlert({
          isShow: true,
          alertType: 'info',
          message: 'Successfully Logged In',
          odd: false
        });
      }
      setCurrentUser(user);

    });
    return unsubscribe;
  }, []);


  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
