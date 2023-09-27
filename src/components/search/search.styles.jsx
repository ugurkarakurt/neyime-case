import styled, { keyframes } from "styled-components";

const slideAnimation = keyframes`
  0% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(0px);
  }
`;

export const SearchContainer = styled.div`
  padding-right: 28px;
  flex: 1 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  animation: ${slideAnimation} 0.5s cubic-bezier(0.680, -0.550, 0.265, 1.550) both;

  @media (max-width: 991px) {
    padding: 0 28px;
  }

  @media (max-width: 576px) {
    flex: none;
    width: 100%;
    order: 3;
    border-right: none;
    border-top: 1px solid rgba(240, 230, 210, 0.1);
    padding: 0 16px;
  }
`;