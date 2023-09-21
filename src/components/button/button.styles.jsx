import styled from 'styled-components';

export const BaseButton = styled.button`
  height: 50px;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  cursor: pointer;
  outline:none;
  background-color: #ffffff;
  color: #D3393C;
  transition: .2s ease-in-out;
  border-radius: 5px;
  border: 1px solid #D3393C;

  &:hover {
    background-color: #D3393C;
    color: #ffffff;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  border-color: #4285f4;
  color: #ffffff;

  &:hover {
    background-color: #ffffff;
    color: #4285f4;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: #D3393C;
  color: #ffffff;

  &:hover {
    background-color: #ffffff;
    color: #D3393C;
  }
`;
