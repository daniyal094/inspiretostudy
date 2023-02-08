import React, { Component, useEffect } from "react";
import Link from "next/link";

const Breadcrumb = (props) => {
  const { pageTitle } = props;

  return (
    <section
      className="page__title-area page__title-height page__title d-flex align-items-center"
      style={{ backgroundColor: "#F1DBBF" }}
    >
      <div className="container">
        <div>
          <div>
            <div
              style={{ display: "flex", justifyContent: "center" }}
            >
              <h3
                style={{ color: "black", fontSize: "60px" }}
                className="text-uppercase"
              >
                {pageTitle ? pageTitle : "Programs"}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
