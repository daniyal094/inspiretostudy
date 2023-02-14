import React, { useState } from "react";

export default function InstructorDetailsMain() {
  const [follow, setFollow] = useState('Follow')

  const followFunc = () => {
    setFollow('unfollow')
  }
  return (
    <div>
      <main>
        <section className="teacher__area pt-100 pb-110">
          <div className="page__title-shape">
            <img
              className="page-title-shape-5 d-none d-sm-block"
              src="assets/img/page-title/page-title-shape-1.png"
              alt="img not found"
            />
            <img
              className="page-title-shape-6"
              src="assets/img/page-title/page-title-shape-6.png"
              alt="img not found"
            />
            <img
              className="page-title-shape-3"
              src="assets/img/page-title/page-title-shape-3.png"
              alt="img not found"
            />
            <img
              className="page-title-shape-7"
              src="assets/img/page-title/page-title-shape-4.png"
              alt="img not found"
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div className="teacher__details-thumb p-relative w-img pr-30">
                  <img
                    src="assets/img/teacher/teacger-1.jpg"
                    alt="img not found"
                  />
                  <div className="teacher__details-shape">
                    <img
                      className="teacher-details-shape-1"
                      src="assets/img/teacher/details/shape/shape-1.png"
                      alt="img not found"
                    />
                    <img
                      className="teacher-details-shape-2"
                      src="assets/img/teacher/details/shape/shape-2.png"
                      alt="img not found"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xxl-8 col-xl-8 col-lg-8">
                <div className="teacher__wrapper">
                  <div className="teacher__top d-md-flex align-items-end justify-content-between">
                    <div className="teacher__info">
                      <h4>Izzah Khurram</h4>
                      <span>Senior Coach</span>
                    </div>
                    <div className="teacher__rating">
                      <h5>Review:</h5>
                      <div className="teacher__rating-inner d-flex align-items-center">
                        <ul>
                          <li>
                            <a href="#">
                              {" "}
                              <i className="fas fa-star"></i>{" "}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {" "}
                              <i className="fas fa-star"></i>{" "}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {" "}
                              <i className="fas fa-star"></i>{" "}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {" "}
                              <i className="fas fa-star"></i>{" "}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {" "}
                              <i className="fas fa-star"></i>{" "}
                            </a>
                          </li>
                        </ul>
                        <p>4.2</p>
                      </div>
                    </div>
                  </div>
                  <div className="teacher__bio">
                    <h3>Short Bio</h3>
                    <p>
                      Only a quid me old mucker squiffy tomfoolery grub cheers
                      ruddy cor blimey guvnor in my flat, up the duff Eaton car
                      boot up the kyver pardon you A bit of how's your father
                      David skive off sloshed, don't get shirty with me chip
                      shop vagabond crikey bugger Queen's English chap. Matie
                      boy nancy boy bite your arm off up the kyver old no biggie
                      fantastic boot, David have it show off show off pick your
                      nose and blow off lost the plot porkies bits and bobs only
                      a quid bugger all mate, absolutely bladdered bamboozled
                      it's your round don't get shirty with me down the pub
                      well.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
