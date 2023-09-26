import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  width: 1200px;
  justify-content: space-around;
  align-items: center;
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
  @media (max-width: 991px) {
    flex-direction: column;
    gap: 77px;
  }
  @media (max-width: 576px) {
    margin: 140px auto 0;
    padding: 35px 14px;
  }
`
