import styled, { css } from "styled-components";


const shrinkLabelStyles = css`
  top: 12px;
  font-size: 11px;
  color: #C89B3C;
  opacity: 1;
`;

export const FormInputLabel = styled.label`
  font-size: 14px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 11px;
  top: 50%;
  transform: translateY(-50%);
  transition: 300ms ease all;
  color: #F0E6D2;
  opacity: .5;

  ${({ shrink }) => shrink && shrinkLabelStyles};
`;

export const Input = styled.input`
  flex:  1 1;
  display: block;
  height: 49px;
  font-size: 14px;
  background-color: #1E2328;
  transition: .2s ease-in-out;
  border: 1px solid #3c3c41;
  border-radius: 5px;
  color: #F0E6D2;
  opacity: .5;
  padding: 12px 10px 0 10px;

  &:focus {
    outline: none;
    border: 1px solid #C89B3C;
    opacity: 1;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles};
  }
`;

export const Group = styled.div`
  display: flex;
  position: relative;
  flex:  .5 1;
  input[type="password"] {
    letter-spacing: 0.3em;
  }
  @media (max-width: 991px) {
    flex:  1 1;
  }
`;
