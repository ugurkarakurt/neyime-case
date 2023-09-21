import styled, { css } from 'styled-components';

const clickEffect = css`
    pointer-events: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) scale(9);
    overflow:hidden;
    opacity: 1;
    z-index: 100;
    transition: transform .4s;
    transition-timing-function: cubic-bezier(1.000, 0.000, 0.000, 1.000) both;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${({ imageUrl }) => `url("${imageUrl}")`};
  transition: transform .1s ease-in-out;
`;

export const Body = styled.div`
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
  bottom: 0;

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;
    text-transform: uppercase;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
  }
`;

export const DirectoryItemContainer = styled.div`
  overflow-x: hidden;
  height: 500px;
  width: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
  overflow: hidden;
  position: relative;
  background: rgb(200,155,60);
  background: linear-gradient(45deg, rgba(200,155,60,1) 0%, rgba(240,230,210,1) 16%, rgba(255,255,255,1) 28%, rgba(200,155,60,1) 53%, rgba(240,230,210,1) 69%, rgba(200,155,60,1) 100%);
  opacity: .7;
  transition: transform .1s ease-in-out;
  ${({ clickState }) => clickState && clickEffect};

  
  &:hover {
    cursor: pointer;
    border-color: #C89B3C;
    transform: scale(1.1);
    opacity: 1;

    & ${Body} {
      opacity: 0.9;
    }
  }
`;
