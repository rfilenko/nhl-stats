import styled from "styled-components";

const List = styled.ul`
  list-style-type: none;
  padding: 0.6rem;
  width: 100%;
  max-height: 390px;
  overflow: hidden;
  overflow-y: scroll;
  box-shadow: ${props => props.theme.boxShadow};
  background: ${props => props.theme.lightGray};
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;

  @media screen and (min-width: 768px) {
    width: 360px;
  }

  li {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  }
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    margin-bottom: 0.325rem;
    span {
      background: ${props => props.theme.blackBg};
      color: ${props => props.theme.lightGray};
      margin: 0 10px;
      padding: 10px;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.3);
      font-size: 85%;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    svg {
      margin-left: 0.3em;
    }
  }
  a {
    color: ${props => props.theme.cardParagraph};
    transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    text-decoration-color: ${props => props.theme.cardParagraph};
    text-decoration-line: underline;
    text-decoration-style: double;
    font-size: 20px;
  }
`;

export default List;
