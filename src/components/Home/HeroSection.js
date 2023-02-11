import React, { Component } from "react";
import Link from "next/link";

class Hero extends Component {
  render() {
    return (
      <main>
        <section className="hero__area  d-flex align-items-center grey-bg-2 p-relative">
          <div className="hero__shape">
            <img
              className="hero-1-circle"
              src="assets/img/shape/hero/hero-1-circle.png"
              alt="img not found"
            />
            <img
              className="hero-1-circle-2"
              src="assets/img/shape/hero/hero-1-circle-2.png"
              alt="img not found"
            />
            <img
              className="hero-1-dot-2"
              src="assets/img/shape/hero/hero-1-dot-2.png"
              alt="img not found"
            />
          </div>
          <div className="container">
            <div className="hero__content-wrapper">
              <div className="row align-items-center">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <div className="hero__content p-relative z-index-1">
                    <h3 className="hero__title">
                      <span></span>
                      <span className="yellow-shape">
                        Inspire{" "}
                        <img
                          src="assets/img/shape/yellow-bg.png"
                          alt="yellow-shape"
                        />{" "}
                      </span>
                      To Study
                    </h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. emo repudiandae maiores cum.
                    </p>
                    <Link href="/course-grid">
                      <a className="e-btn">view all course</a>
                    </Link>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <div className="hero__thumb d-flex p-relative">
                    <div className="hero__thumb-shape">
                      <img
                        className="hero-1-dot"
                        src="assets/img/shape/hero/hero-1-dot.png"
                        alt="img not found"
                      />
                      <img
                        className="hero-1-circle-3"
                        src="assets/img/shape/hero/hero-1-circle-3.png"
                        alt="img not found"
                      />
                      <img
                        className="hero-1-circle-4"
                        src="assets/img/shape/hero/hero-1-circle-4.png"
                        alt="img not found"
                      />
                    </div>
                    <div
                      className="hero__thumb-big"
                      style={{ marginLeft: "75px" }}
                    >
                      <img
                        src="assets/img/hero/hero-sm-1.jpg"
                        alt="img not found"
                      />
                      {/* <div className="hero__quote hero__quote-animation " style={{marginTop:'500px'}}>
                                            <span>Tomorrow is our</span>
                                            <h4>“When I Grow Up” Spirit Day!</h4>
                                        </div> */}
                    </div>
                    {/* <div className="hero__thumb-sm mt-50 d-none d-lg-block">
                                        <img className='img-fluid' src="assets/img/hero/hero-1.png" alt="img not found"/>
                                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Hero;
