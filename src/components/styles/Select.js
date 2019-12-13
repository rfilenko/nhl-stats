import styled from "styled-components";

const Select = styled.select`
  transition: all 0.1s ease-in;
  margin: 0.75rem;
  margin-left: auto;
  padding-left: 2.5rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  line-height: 1.5;
  display: block;
  border-width: 1px;
  border-radius: 0.5rem;
  border-color: transparent;
  background-color: ${props => props.theme.lightgray};
  color: ${props => props.theme.blackBg};
  cursor: pointer;
  &:focus {
    outline: 0;
    border-color: ${props => props.theme.lightGray};
    background-color: #fff;
  }
`;

export default Select;
