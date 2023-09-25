import styled, { keyframes } from "styled-components";

const bounceAnimation = keyframes`
  0% {
      transform: scale(1);
  }
  50% {
      transform: scale(2);
  }
  100%{
      transform: scale(1);
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${({ imageUrl }) => `url("${imageUrl}")`};
  transition: transform 0.1s ease-in-out;
`;

export const SlideEffectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #010a13;
  position: fixed;
  inset: 0;
  z-index: 100;
  width: auto;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  opacity: 1;
  transition: transform 0.4s ease-in-out;
  animation-name: ${bounceAnimation};
  animation-duration: .4s;
`;
