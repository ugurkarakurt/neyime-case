import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  font-size: 20px;
  align-items: center;
`;

export const CheckoutItemBodyInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 2 1;
  gap: 7px;
  font-size: 12px;
  height: 55px;
`;

export const CheckoutItemLeague = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1 1;
  font-size: 12px;
  height: 55px;
`;

export const CheckoutItemName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1;
  margin: 0 2px;
  font-size: 12px;
  height: 55px;
    border-radius: 5px;
  border: 1px solid rgba(240, 230, 210, 0.1);
`;

export const CheckoutItemRate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  height: 55px;
  width: 100px;
  border-radius: 5px;
  border: 1px solid rgba(240, 230, 210, 0.1);
`;

export const CheckoutItemRemoveButton = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 12px;
  cursor: pointer;
  height: 20px;
  width: 50px;
`;
