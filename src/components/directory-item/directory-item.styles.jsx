import styled, { css } from "styled-components";

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
  position: fixed;
  inset: 0;
  transform: scale(7);
  z-index: 100;
  width: auto;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  opacity: 1;
  transition: transform .4s ease-in-out; 
  ${BackgroundImage} {
    transform: scale(.2);
    transition: transform .4s ease-in-out; 
  }
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
