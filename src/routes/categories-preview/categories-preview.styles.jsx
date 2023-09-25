import styled from "styled-components";

export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  height: 600px;
  overflow-y: auto;
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
