import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import nhlLogo from "../images/NHL_logo.svg";
const SiteHeader = styled.header`
  background-color: ${props => props.theme.blackBg};
  padding: 1rem;
  box-shadow: ${props => props.theme.boxShadowMd};
  display: flex;
  align-items: center;
  a {
    color: ${props => props.theme.linkColor};
    margin-left: 0.5rem;
    text-decoration: none;
    &.active {
      color: #edf2f7;
      font-weight: bold;
    }
  }
`;

function Header() {
  return (
    <SiteHeader>
      <img src={nhlLogo} width="45px" alt="nhl logo" />
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/contact">
        Contact
      </NavLink>
    </SiteHeader>
  );
}

export default Header;
