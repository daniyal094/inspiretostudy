import React from "react";
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header";
import FaqData from "../components/Faq/FaqData";

export default function faq() {
  return (
    <>
      <React.Fragment>
        <Header />
        <FaqData />
        <Footer />
      </React.Fragment>
    </>
  );
}
