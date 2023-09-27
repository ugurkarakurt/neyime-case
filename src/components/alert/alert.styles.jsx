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
  border: 1px solid #c89b3c;
  background-color: #010a13;
  border-right: none;
  border-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  padding: 0 10px;
  padding-right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #c89b3c;
  height: 50px;
  min-width: 100px;
  position: fixed;
  right: 0;
  bottom: 77px;
  z-index: 999;
  animation: ${slideAnimation} 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) both;
  @media (max-width: 991px) {
    bottom: 35px;
  }
`;

export const Danger = styled(Success)`
  background-color: #010a13;
  border-color: #d3393c;
  color: #d3393c;
`;

export const Warning = styled(Success)`
  background-color: #010a13;
  border-color: #f0e6d2;
  color: #f0e6d2;
`;

export const Info = styled(Success)`
  border-color: #0397ab;
  background-color: #010a13;
  color: #0397ab;
`;

export const Odd = styled.div`
  color: #f0e6d2;
  margin-left: 10px;
  font-weight: bold;
`;
