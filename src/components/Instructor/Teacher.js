import Link from "next/link";
import React from "react";

export default function Teacher(props) {
  return (
    <>
      <div class="col-sm-6 col-lg-3  my-5">
        <div class="box shadow-sm p-4">
          <div class="image-wrapper mb-3">
            <img
              class="img-fluid"
              src="https://images.pexels.com/photos/555790/pexels-photo-555790.png"
              alt="..."
            />
          </div>
          <div >
            <h5 class="box-desc">{props.teacherName}</h5>
            {/* <p>FrontEnd Developer</p> */}
          </div>
          <ul class="social">
            <li>
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-pinterest-p"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* <div className="teacher__item text-center grey-bg-5 transition-3 mb-30">
        <div className="teacher__thumb w-img fix">
        </div>
        <div className="teacher__content">
          <h3 className="teacher__title">{props.teacherName}</h3>
        </div>
        <span> {props.position}</span>
      </div> */}
    </>
  );
}
