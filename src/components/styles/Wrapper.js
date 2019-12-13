import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;

  width: 100%;
  min-height: calc(100vh - 4rem);
  box-sizing: border-box;
`;

// A new centered Wrapper
export const WrapperCentered = styled(Wrapper)`
  justify-content: center;
`;
