import React from "react";
import styled from "styled-components";

const AButton = styled.button`
  border: none;
  font-size: 0.85rem;
  text-transform: uppercase;
  margin-left: 1rem;
  padding: 0.6em;
  display: inline-block;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.25s ease-in;
  color: ${props => props.theme.lightGray};
  background: ${props => props.theme.blackBg};
  margin: 0 0.5rem;
  &:hover {
    opacity: 0.95;
  }
`;
function Button({ children }) {
  return <AButton>{children}</AButton>;
}

export default Button;
