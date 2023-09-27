import { createContext, useState } from 'react';

export const AlertContext = createContext({
  alert: {
    isShow: false,
    alertType: '',
    message: '',
    odd: false,
  },
  setAlert: () => { },
  showAlert: () => { },
  hideAlert: () => { },
});

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({});
  const [timeoutID, setTimeoutID] = useState(null);


  const showAlert = ({ message, alertType, isShow, odd }) => {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }

    setAlert({ message, alertType, isShow, odd });

    const newTimeoutID = setTimeout(() => {
      hideAlert();
    }, 3000);

    setTimeoutID(newTimeoutID);
  };

  const hideAlert = () => {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }

    setAlert({ ...alert, isShow: false, odd: false });
  };

  const value = { alert, showAlert, hideAlert };

  return <AlertContext.Provider value={value}>{children}</AlertContext.Provider>;
};
