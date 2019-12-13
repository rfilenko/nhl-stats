import styled from "styled-components";

const TeamWrapper = styled.div`
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding: 1rem;
  overflow: hidden;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  border-color: #cbd5e0;
  h1,
  h2,
  h3 {
    margin: 0;
    margin-top: 1rem;
  }
  h3 {
    flex-basis: 100%;
  }
  > h3 {
    text-align: center;
  }
  .inner-wrap {
    display: flex;
    flex-basis: 100%;
  }
`;

export default TeamWrapper;
