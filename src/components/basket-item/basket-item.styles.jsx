import styled from "styled-components";

export const BasketItemContainer = styled.div`
  width: 100%;
  display: flex;
  font-size: 20px;
  align-items: center;
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: stretch;
    gap: 14px;
    position: relative;
  }
`;

export const BasketItemBodyInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 2 1;
  gap: 7px;
  font-size: 12px;
  height: 55px;
`;

export const BasketItemLeague = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1 1;
  font-size: 12px;
  height: 55px;
  color: rgba(240, 230, 210, 0.5);
`;

export const BasketItemName = styled.div`
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

export const BasketItemRate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  height: 55px;
  width: 100px;
  border-radius: 5px;
  border: 1px solid rgba(240, 230, 210, 0.1);
  color: #c89b3c;
`;

export const BasketItemRemoveButton = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 12px;
  cursor: pointer;
  height: 20px;
  width: 50px;
  @media (max-width: 576px) {
   position: absolute;
   right: -10px;
   top: -5px;
  }
`;
