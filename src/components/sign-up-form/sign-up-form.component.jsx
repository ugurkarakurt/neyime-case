import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import { SignUpContainer, FormContainer, ButtonsContainer } from './sign-up-form.styles';
import { AlertContext } from '../../contexts/alert.context';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const { showAlert } = useContext(AlertContext);


  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      showAlert({
        isShow: true,
        alertType: 'danger',
        message: 'Passwords do not match',
        odd: false
      });
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      navigate('/');

      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        showAlert({
          isShow: true,
          alertType: 'danger',
          message: 'Cannot create user, email already in use',
          odd: false
        });
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <FormContainer onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

        <FormInput
          label='Confirm Password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <ButtonsContainer>
          <Button children={'Sign Up'} buttonType={'inverted'} type='submit' />
        </ButtonsContainer>
      </FormContainer>
    </SignUpContainer>
  );
};

export default SignUpForm;
