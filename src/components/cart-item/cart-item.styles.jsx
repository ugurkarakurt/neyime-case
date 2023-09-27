import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  user-select: none;
  padding: 0 14px;
`;

export const RemoveButtonContainer = styled.img`
  position: absolute;
  right: 13px;
  top: 0;
  width: 12px;
  cursor: pointer;
`;

export const CartItemWrapper = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  padding-bottom: 14px;
  gap: 7px;
  border-bottom: 1px solid rgba(240, 230, 210, 0.1);
  span {
    font-size: 12px;

    &.name {
      font-size: 14px;
    }

    &:last-child {
      color: #c89b3c;
      display: flex;
      justify-content: space-between;
      span {
        color: rgba(240, 230, 210, 0.5);
      }
    }
  }
`;
