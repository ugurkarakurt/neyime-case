import styled, { keyframes } from 'styled-components';

import Button from '../button/button.component';

const slideAnimation = keyframes`
  0% {
    transform: translateY(50px);
  }
  100% {
    transform: translateY(0px);
  }
`;

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 300px;
  min-height: 200px;
  padding: 28px 14px;
  border: 1px solid rgba(240, 230, 210, .1);
  border-radius: 5px;
  top: calc(100% + 2px);
  right: 150px;
  color: #F0E6D2;
  background-color: #010A13;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${slideAnimation} 0.5s cubic-bezier(0.680, -0.550, 0.265, 1.550) both;

  @media (max-width: 991px) {
    right: 0;
  }

  @media (max-width: 576px) {
    width: 100%;
    top: 100%;
    border-radius: 0;
  }

  ${Button} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 234px;
  overflow-y: auto;
  margin-bottom: 14px;
  gap: 14px;
`;

export const CartTotal = styled.span`
  padding: 0 20px;
 text-align: end;
 margin-bottom: 14px;
 color: #F0E6D2;
`