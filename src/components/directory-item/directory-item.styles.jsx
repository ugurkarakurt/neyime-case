import styled, { css, keyframes } from "styled-components";

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

export const Body = styled.div`
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #C89B3C;

  h2 {
    font-weight: bold;
    font-size: 12px;
    text-transform: uppercase;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
  }
`;

const clickEffect = css`
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
  border-color: transparent;
  animation-name: ${bounceAnimation};
  animation-duration: .4s;
  ${Body}{
    display: none;
  }
`;

export const DirectoryItemContainer = styled.div`
  border: 1px solid #C89B3C;
  background-color: #010A13;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 35px;
  overflow: hidden;
  position: relative;
  opacity: .7;
  transition: transform 0.1s ease-in-out;
  ${({ isButtonCliked }) => isButtonCliked && clickEffect};
  min-height: 250px;

  &:hover {
    cursor: pointer;
    border-color: #c89b3c;
    transform: scale(1.1);
    opacity: 1;
    z-index: 10;

    & ${Body} {
      opacity: 0.9;
    }
  }

`;
