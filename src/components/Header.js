import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SiteHeader = styled.header`
  background-color: ${props => props.theme.blackBg};
  padding: 1rem;
  box-shadow: ${props => props.theme.boxShadowMd};
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
