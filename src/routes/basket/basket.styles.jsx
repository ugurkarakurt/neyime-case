import styled from "styled-components";

export const BasketContainer = styled.div`
  width: 1200px;
  height: 600px;
  display: flex;
 flex-direction: row;
 justify-content: flex-start;
 align-items: stretch;
  margin: 140px auto 0;
  padding: 35px 0;
  border: 1px solid rgba(240, 230, 210, 0.1);
  border-radius: 10px;
  color: #fff;
  @media (max-width: 1200px) {
    flex-direction: column;
    margin: 70px auto 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export const BasketItemContainer = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(240, 230, 210, 0.1);
  padding: 0 35px;
`;

export const BasketItemBody = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: 7px;
  padding: 14px;
  padding-left: 0;
  @media (max-width: 576px) {
    gap: 35px;
    padding: 14px 0;
  }

  &::-webkit-scrollbar {
    width: 2px;
    height: 1px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(240, 230, 210, 0.1);
    outline: 1px solid rgba(240, 230, 210, 0.1);
    border-radius: 0px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: none;
    margin: 30px;
  }

  @-moz-document url-prefix() {
    .scroller {
      scrollbar-width: thin;
      scrollbar-color: rgba(240, 230, 210, 0.1);
    }
  }
`;

export const BasketItemHeader = styled.div`
  padding-bottom: 21px;
  margin-bottom: 21px;
  border-bottom: 1px solid rgba(240, 230, 210, 0.1);
  color: #c89b3c;
`;

export const BasketSummaryContainer = styled.div`
flex: 1 1;
  padding: 35px 35px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 14px;
`;

export const OddsContainer = styled.div`
  display: flex;
  padding: 0 21px;
  flex-wrap: wrap;
  gap: 7px;
  justify-content: flex-end;
  align-items: center;
  font-size: 12px;
  color: rgba(240, 230, 210, 0.5);
  width: 100%;
`;

export const OrderSummary = styled.div`
  width: 100%;
  padding: 21px;
  border: 1px solid rgba(240, 230, 210, 0.1);
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  font-size: 14px;
  color: rgba(240, 230, 210, 1);
`;

export const BasketTotal = styled.div`
  width: 100%;
  padding: 21px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(240, 230, 210, 0.1);
  span{
    color: #c89b3c;

    &:first-child{
     color: rgba(240, 230, 210, .5);
    }
  }
`;