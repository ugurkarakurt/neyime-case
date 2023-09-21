import styled, { css } from "styled-components";

const clickEffect = css`
  pointer-events: none ;
`;

export const DirectoryContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 140px 70px 70px;
  gap: 10px;
  ${({ categoryOpened }) => categoryOpened && clickEffect};
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    padding: 175px 35px 35px;
    grid-template-columns: repeat(1, 1fr);
  }
`
