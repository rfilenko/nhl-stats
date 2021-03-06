import styled from "styled-components";

export const GameBadge = styled.b`
  position: absolute;
  right: 0rem;
  top: 1rem;
  color: ${props => props.theme.darkWhite};
  font-size: 0.7rem;
  background: ${props => props.theme.red};
  padding: 0.3rem;
  border-radius: 3px;
`;
export const GameBadgeWon = styled(GameBadge)`
  background: ${props => props.theme.green};
`;
export const GameBadgeTied = styled(GameBadge)`
  background: ${props => props.theme.orange};
`;
