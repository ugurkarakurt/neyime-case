import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 1200px;
  height: 600px;
  display: flex;
  align-items: center;
  margin: 140px auto 0;
  padding: 35px;
  border: 1px solid rgba(240, 230, 210, 0.1);
  border-radius: 10px;
  color: #fff;
`;

export const CheckoutItemContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex:  2 1;
`
export const CheckoutItemBody = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 21px;
  flex:  1 1;
  overflow-y: auto;
  gap: 7px;
  border-right: 1px solid rgba(240, 230, 210, 0.1);
`
export const CheckoutItemHeader = styled.div`
  padding-bottom: 21px;
  margin-bottom: 21px;
  border-bottom: 1px solid rgba(240, 230, 210, 0.1);
`
export const CheckoutTotalContainer = styled.div`
  flex:  1 1;
`
export const CheckoutTotal = styled.div`

`

