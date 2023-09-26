import styled from "styled-components";

export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  height: 600px;
  padding: 35px;
  border: 1px solid rgba(240, 230, 210, 0.1);
  border-radius: 10px;
  margin: 140px auto 0;
  @media (max-width: 1200px) {
    margin: 70px auto 0;
    width: 100%;
    height: 100%;
    border: none;
  }
  @media (max-width: 576px) {
    margin: 140px auto 0;
    padding: 35px 14px;
  }
`;


export const Categories = styled.div`
 overflow-y: auto;

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
