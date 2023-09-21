import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from './button.styles';

import buttonClickSound from '../../assets/audios/back.mp3';
import useSound from 'use-sound';

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
({
  [BUTTON_TYPE_CLASSES.base]: BaseButton,
  [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
  [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
}[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const [click] = useSound(buttonClickSound, { volume: 1 });

  const CustomButton = getButton(buttonType);
  return <CustomButton onClick={click} {...otherProps}>{children}</CustomButton>;
};

export default Button;
