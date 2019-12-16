import React from "react";
import { WrapperCentered } from "./styles/Wrapper";
import Header from "./Header";
import MainContent from "./styles/MainContent";

function Contact(props) {
  return (
    <>
      <Header />
      <WrapperCentered>
        <MainContent>
          <h3>sample page</h3>
          <button onClick={() => props.history.goBack()}>go back</button>
        </MainContent>
      </WrapperCentered>
    </>
  );
}

export default Contact;
