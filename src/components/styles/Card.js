import styled from "styled-components";
import player from "../../images/player.png";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 25rem;
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
      top: -1rem;
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
// A new Card Player component based on Card
export const CardPlayer = styled(Card)`
  min-width: inherit;
  width: 25rem;
  background-image: url(${player});
  background-size: 30%;
  background-repeat: no-repeat;
  background-position: bottom right;
`;

// A new component based on Card
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
  div {
    min-height: 4rem;
    position: relative;
  }
  p:first-of-type {
    width: ${props => (props.prev ? "25%" : "auto")};
    background: ${props => props.theme.darkWhite};
    padding: 0.3em;
    border-radius: 0.3rem;
    display: flex;
    justify-content: center;
  }
  p {
    font-size: 1rem;
    align-self: center;

    > svg {
      font-size: 1rem;
    }
    color: ${props => props.theme.darkGray};

    span {
      color: ${props => props.theme.darkBg};
      color: ${props => props.theme.darkGray};
      font-weight: bold;

      position: relative;
      i {
        color: ${props => props.theme.darkGray};
        padding: 3px;
        font-size: 0.6rem;
        border-radius: 50%;
        position: absolute;
        top: -1rem;
        width: 0.8rem;
        display: flex;
        justify-content: center;
      }
      .wins {
        background: ${props => props.theme.green};
        left: -1.4rem;
      }
      i.losses {
        background: ${props => props.theme.red};
        color: white;
      }
    }
    span:last-of-type {
      .wins {
        left: inherit;
        right: 0;
      }
      .losses {
        right: -1.4rem;
      }
    }
  }
  a {
    color: ${props => props.theme.linkColor};
  }
`;
