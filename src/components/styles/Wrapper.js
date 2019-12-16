import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;

  width: 100%;
  margin-top: -1rem;
  box-sizing: border-box;

  button {
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
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;
// A new centered Wrapper
export const WrapperCentered = styled(Wrapper)`
  justify-content: center;
`;
// rapper player
export const WrapperPlayer = styled(Wrapper)`
  margin-top: 0;
  justify-content: center;
`;
