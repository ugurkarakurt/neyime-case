import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  width: 900px;
  justify-content: space-between;
  margin: 175px auto;

  @media (max-width: 991px) {
      flex-direction: column;
      gap: 49px;
      width: 100%;
      margin: 140px auto;
      padding: 0 70px;
  }
  @media (max-width: 576px) {
    margin: 210px auto;
     padding: 0 28px;
  }
`
