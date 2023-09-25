import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import { AuthenticationContainer } from './authentication.styles';
import SlideEffect from "../../components/slide-effect/slide-effect.component";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SlideEffect />
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
