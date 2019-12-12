import styled from "styled-components";

const List = styled.ul`
  list-style-type: none;
  padding: 0.6rem;
  width: 330px;
  max-height: 390px;
  overflow: hidden;
  overflow-y: scroll;
  box-shadow: ${props => props.theme.boxShadow};
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  li {
    display: flex;
    flex-flow: row wrap;
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
  }
`;

export default List;
