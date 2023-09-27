import { Success, Warning, Danger, Info, Odd } from './alert.styles';
import { Fragment, useContext } from 'react';
import { AlertContext } from '../../contexts/alert.context';
import { CartContext } from '../../contexts/cart.context';

export const ALERT_TYPE_CLASSES = {
  success: 'success', warning: 'warning', danger: 'danger', info: 'info'
};

const getAlert = (alertType = ALERT_TYPE_CLASSES.success) =>
({
  [ALERT_TYPE_CLASSES.success]: Success,
  [ALERT_TYPE_CLASSES.warning]: Warning,
  [ALERT_TYPE_CLASSES.danger]: Danger,
  [ALERT_TYPE_CLASSES.info]: Info,

}[alertType]);

const AlertMessage = () => {
  const { cartTotal, cartItems } = useContext(CartContext);
  const { alert } = useContext(AlertContext);


  const CustomAlert = getAlert(alert.alertType);

  return (
    <Fragment>
      {alert.isShow && (
        <CustomAlert>
          {alert.message}
          {alert.odd && cartItems.length > 0 && <Odd>₺ {cartTotal}</Odd>}
        </CustomAlert>
      )}
    </Fragment>
  );
};

export default AlertMessage;
