import React from "react";
import WrapperCentered from "./styles/WrapperCentered";
import Header from "./Header";
import MainContent from "./styles/MainContent";

function Contact() {
  return (
    <>
      <Header />
      <WrapperCentered>
        <MainContent>
          <h3>contact page</h3>
        </MainContent>
      </WrapperCentered>
    </>
  );
}

export default Contact;
