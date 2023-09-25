import styled, { css } from "styled-components";

const active = css`
  background-color: #d3393c;
`;

const firstItem = css`
  &>div{
    color: rgba(240, 230, 210, 0.5);
  }
  &:last-child {
    font-size: 14px;
    flex: 1 1;
    display: flex;
    align-items: flex-start;
    &>div{
      color: #ffffff;
    }
  }
`;

export const ProductCardItemContainer = styled.div`
  user-select: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  width: 55px;
  ${({ existingCartItemID }) => existingCartItemID && active};
  ${({ showBody }) => !showBody && firstItem};
 
`;

export const ProdcutCardItemHeader = styled.div`
  display: flex;
  font-size: 12px;
  padding: 5px;
  color: #f0e6d2;
`;

export const ProdcutCardItemBody = styled.div`
  display: flex;
  font-size: 12px;
  padding: 5px;
`;
