import React from "react";
import { WrapperCentered } from "./styles/Wrapper";
import Header from "./Header";
import MainContent from "./styles/MainContent";

function Contact() {
  return (
    <>
      <Header />
      <WrapperCentered>
        <MainContent>
          <h3>sample page</h3>
        </MainContent>
      </WrapperCentered>
    </>
  );
}

export default Contact;
