import styled, { keyframes } from "styled-components";

const slideAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(calc(0% + 20px));
  }
`;

export const Success = styled.div`
  border: 1px solid #C89B3C;
  background-color: #010A13;
  border-right: none;
  border-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  padding: 0 10px;
  padding-right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #C89B3C;
  height: 50px;
  min-width: 100px;
  position: fixed;
  right: 0;
  bottom: 77px;
  z-index: 999;
  animation: ${slideAnimation} 0.5s cubic-bezier(0.680, -0.550, 0.265, 1.550) both;
`;

export const Danger = styled(Success)`
  background-color: #D3393C;
  border-color: #F0E6D2;
  color: #F0E6D2;
`;

export const Warning = styled(Success)`
  background-color: #0397AB;
    color: #F0E6D2;
`;

export const Info = styled(Success)`
  border-color: #010A13;
  background-color: #F0E6D2;
  color: #010A13;
`;

export const Odd = styled.div`
    color: #F0E6D2;
    margin-left: 10px;
    font-weight: bold;
`
