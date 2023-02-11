import React  from "react";

const Breadcrumb = (props) => {
  const { pageTitle, img,  styles, stylesImg, isImage = true } = props;

  return (
    <section className="align-items-center mt-150" style={styles}>
      {isImage ? (
        <img src={img} alt="" className="img-fluid" style={stylesImg} />
      ) : (
        <div
          className=" w-100 "
          style={{
            backgroundColor: "#0073A1",
            height: "40vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3
            style={{ color: "white", fontSize: "60px" }}
            className="text-uppercase"
          >
            {pageTitle ? pageTitle : "Programs"}
          </h3>
        </div>
      )}
    </section>
  );
};

export default Breadcrumb;
