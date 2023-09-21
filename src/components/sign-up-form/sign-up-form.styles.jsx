import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  display: flex;
  flex-direction: column;
  gap: 14px;

  h2 {
    color: #F0E6D2;
  }

  span {
    color: #F0E6D2;
  }

  @media (max-width: 991px) {
      flex-direction: column;
      width: 100%;
  }
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    button{
      flex: 1 1;
      display: flex;
      justify-content: center;
      align-items: center;

    }
`

export const FormContainer = styled.form`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
`
