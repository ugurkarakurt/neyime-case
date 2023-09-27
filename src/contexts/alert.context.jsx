import { createContext, useState } from 'react';

export const AlertContext = createContext({
  alert: {
    isShow: false,
    alertType: '',
    message: ''
  },
  setAlert: () => { },
  showAlert: () => { },
  hideAlert: () => { },
});

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({});
  const [timeoutID, setTimeoutID] = useState(null);


  const showAlert = ({ message, alertType, isShow }) => {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }

    setAlert({ message, alertType, isShow });

    const newTimeoutID = setTimeout(() => {
      hideAlert();
    }, 3000);

    setTimeoutID(newTimeoutID);
  };

  const hideAlert = () => {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }

    setAlert({ ...alert, isShow: false });
  };

  const value = { alert, showAlert, hideAlert };

  return <AlertContext.Provider value={value}>{children}</AlertContext.Provider>;
};
