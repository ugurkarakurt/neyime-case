import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background-color: #010a13;
  border-bottom: 1px solid rgba( 240, 230, 210, .1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  @media (max-width: 576px) {
    flex-wrap: wrap;
    height: 140px;
  }
`;

export const LogoContainer = styled(Link)`
  width: 350px;
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
  @media (max-width: 991px) {
    width: fit-content;
  }
`;

export const NavLinks = styled.div`
  padding: 0 14px;
  width: 350px;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  @media (max-width: 991px) {
    width: fit-content;
  }
`;

export const NavLink = styled(Link)`
  cursor: pointer;
  color: #f0e6d2;
  opacity: 0.5;
  padding: 0 14px;
  transition: 0.1s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  &:hover {
    opacity: 1;
    background-color: #1e282d;
  }
  img {
    width: 16px;
    height: 16px;
    display: none;
  }

  @media (max-width: 991px) {
    opacity: 1;
    span {
      display: none;
    }
    img {
      display: block;
    }
  }
`;

export const SearchContainer = styled.div`
  padding-right: 28px;
  flex: 1 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-right: 1px solid rgba( 240, 230, 210, .1);
  @media (max-width: 991px) {
    padding: 0 28px;
  }

  @media (max-width: 576px) {
    flex: none;
    width: 100%;
    order: 3;
    border-right: none;
    border-top: 1px solid rgba( 240, 230, 210, .1);
  }
`;

export const Logo = styled.div`
  transition: 0.1s ease-in-out;
  padding: 0 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-right: 1px solid rgba( 240, 230, 210, .1);
  img {
    @media (max-width: 991px) {
      width: 100px;
    }
  }
  &:hover {
    background-color: #1e282d;
  }

  flex: 0.5 1;
`;
