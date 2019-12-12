import styled from "styled-components";

const TeamWrapper = styled.div`
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding: 1rem;
  overflow: hidden;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  border-color: #cbd5e0;
  max-width: 450px;
  h1,
  h2,
  h3 {
    margin: 0;
    margin-top: 1rem;
  }
`;

export default TeamWrapper;
