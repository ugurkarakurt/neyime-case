import { createContext, useState } from 'react';

export const AlertContext = createContext({
  alert: {
    isShow: false,
    alertType: 'success',
    message: 'Message'
  },
  setAlert: () => { },
});

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({});

  const value = { alert, setAlert };

  return <AlertContext.Provider value={value}>{children}</AlertContext.Provider>;
};