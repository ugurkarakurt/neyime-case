import styled from "styled-components";

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  color: #f0e6d2;
  gap: 5px;
  @media (max-width: 1200px) {
    width: 860px;
    margin: 0 auto;
  }
  @media (max-width: 991px) {
    width: 100%
  }
`;

export const ProductCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 420px) {
    flex-direction: column;
    gap: 7px;
  }
`;
export const ProdcutCardDate = styled.div`
  font-size: 12px;
  padding: 0 5px;
`;

export const ProdcutCardCategoryName = styled.div`
  font-size: 12px;
  padding: 0 5px;
`;

export const ProductCardBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 1200px) {
    overflow-x: auto;
    padding-bottom: 14px;
  }
`;

export const ProductCardFooter = styled.div`
  display: none;
  justify-content: flex-start;
  align-items: center;
  gap: 7px;
  padding: 7px 5px;
  span {
    color: #ffffff;
    font-size: 12px;
  }
  @media (max-width: 1200px) {
    display: flex;
  }
`;

export const ProdcutCardSection = styled.section`
  display: flex;
  flex-direction: row;
  overflow: hidden;

  &:not(:first-child) {
    border-radius: 5px;
    border: 1px solid rgba(240, 230, 210, 0.1);
    margin: 0 2px;
    cursor: pointer;
  }

  &:nth-child(2) {
    min-width: 165px;
  }
  &:nth-child(3) {
    min-width: 110px;
  }
  &:nth-child(4) {
    min-width: 255px;
  }
  &:nth-child(5) {
    min-width: 165px;
  }
  &:nth-child(6) {
    min-width: 110px;
  }

  &:first-child {
    flex: 1 1;
    font-weight: bold;
    pointer-events: none;
    min-width: 250px;
    @media (max-width: 1200px) {
      display: none;
    }
  }
`;
