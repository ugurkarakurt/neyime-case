import { Fragment, useEffect, useState } from 'react';
import { SlideEffectContainer, BackgroundImage } from './slide-effect.stlyes';
import Logo from '../../assets/images/icons/nesine-logo.png';

const SlideEffect = () => {
  const [slideEffect, setSlideEffect] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSlideEffect(false);
    }, 400);
  }, []);


  return (
    <Fragment>
      {slideEffect && (
        <SlideEffectContainer>
          <BackgroundImage imageUrl={Logo} />
        </SlideEffectContainer>
      )}
    </Fragment>
  )
}


export default SlideEffect;