import React from "react";
import styled from "styled-components";

const ALink = styled.a`
  a {
    color: ${props => props.theme.linkColor};
    margin-left: 0.5rem;
    transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    &:hover {
      opacity: 0.8;
      text-decoration: none;
    }
  }
`;
function Link({ children }) {
  return (
    <ALink target="_blank" rel="noopener noreferrer">
      {children}
    </ALink>
  );
}

export default Link;
