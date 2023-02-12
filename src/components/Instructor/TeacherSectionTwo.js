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
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <Teacher teacherImg='assets/img/teacher/teacger-1.jpg' teacherName='Moiz Khan' position='Senior Coach' />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TeacherTwo;
