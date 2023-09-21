import styled from "styled-components";

import { ReactComponent as ShoppingSvg } from "../../assets/images/icons/shopping-bag.svg";

export const ShoppingIcon = styled(ShoppingSvg)`
  width: 16px;
  height: 16px;
  margin-bottom: 3px;
`;

export const CartIconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0 14px;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 8px;
  font-weight: bold;
  bottom: 29px;
  color: #f0e6d2;
  @media (max-width: 576px) {
    bottom: 22px;
  }
`;
