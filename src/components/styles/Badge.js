import styled from "styled-components";

const Badge = styled.p`
  font-size: 0.85rem;
  text-transform: uppercase;
  margin-left: 1rem;
  padding: 0.6em;
  display: inline-block;
  border-radius: 5px;
  font-weight: bold;
  letter-spacing: -0.5px;
  color: ${props => props.theme.lightGray};
  background: ${props => props.theme.spanNumber};
`;

export default Badge;
