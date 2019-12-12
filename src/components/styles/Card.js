import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 25rem;
  margin: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 0.3em;
  background-color: ${props => props.theme.blackBg};
  font-size: 1rem;

  h3 {
    background: ${props => props.theme.lightGray};
    color: ${props => props.theme.darkGray};
    margin: 0;
    padding: 1.25rem;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.01em;
    font-size: 1.35rem;
  }
  p {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    font-weight: 400;
    color: ${props => props.theme.cardParagraph};
    span {
      color: ${props => props.theme.spanParagraph};
      margin-left: 0.5rem;
    }
  }
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

export default Card;
