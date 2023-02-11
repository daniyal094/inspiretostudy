import React, { Component, useEffect } from "react";
import Link from "next/link";

const Breadcrumb = (props) => {
  const { pageTitle, img, color, styles, stylesImg } = props;

  return (
    <section
      className="align-items-center mt-150"
      style={styles}
    >
      <img src={img} alt="" className="img-fluid" style={stylesImg} />
      {/* <div className="container p-absolute">
        <div>
          <div>
            <div
              style={{ display: "flex", justifyContent: "center" }}
            >
              <h3
                style={{ color: color, fontSize: "60px" }}
                className="text-uppercase"
              >
                {pageTitle ? pageTitle : "Programs"}
              </h3>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Breadcrumb;
