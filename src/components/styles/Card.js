import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;
  margin: 0.75rem;
  box-shadow: ${props => props.theme.boxShadowMd};
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
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    > svg {
      font-size: 2rem;
    }
    color: ${props => props.theme.cardParagraph};
    span {
      color: ${props => props.theme.spanParagraph};
      margin-left: 0.5rem;
    }
    i {
      font-size: x-large;
      font-style: inherit;
      font-weight: bold;
      color: ${props => props.theme.red};
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
// A new component based on Button, but with some override styles
export const CardSmall = styled(Card)`
  width: 20rem;
  font-size: 1rem;
  background-color: ${props => props.theme.lightGray};
  h3 {
    background: ${props => "#fff"};
    color: ${props => props.theme.green};
    padding: 1rem;
    font-size: 1rem;
  }
  p {
    font-size: 1rem;
    position: relative;

    > svg {
      font-size: 1rem;
    }
    color: ${props => props.theme.darkGray};

    span {
      color: ${props => props.theme.darkBg};
      color: ${props => props.theme.darkGray};
      font-weight: bold;
    }
  }
  a {
    color: ${props => props.theme.linkColor};
  }
`;
