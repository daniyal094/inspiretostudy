import React, { Component } from "react";
import Link from "next/link";
import Teacher from "./Teacher";
import { Navigation } from "swiper";

class TeacherTwo extends Component {
  render() {
    return (
      <section className="teacher__area pt-115 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 offset-xxl-3">
              <div className="section__title-wrapper text-center mb-60">
                <h2 className="section__title">
                  Our Most <br />
                  Popular{" "}
                  <span className="yellow-bg">
                    {" "}
                    Teachers{" "}
                    <img
                      src="assets/img/shape/yellow-bg-2.png"
                      alt="img not found"
                    />{" "}
                  </span>{" "}
                  <br />
                </h2>
                <p>
                  You don't have to struggle alone, you've got our assistance
                  and help.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <Teacher teacherImg='assets/img/teacher/teacger-1.jpg' teacherName='Moiz Khan' position='Senior Coach'  />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TeacherTwo;
