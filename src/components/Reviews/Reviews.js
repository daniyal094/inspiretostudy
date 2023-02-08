import React from "react";
import ReplyForm from "../BlogDetails/ReplyFormSection";
import Breadcrumb from "../Common/Breadcrumb";
import TestimonialThree from "../HomeThree/TestimonialSectionThree";
import WriteReviews from "./WriteReviews";

export default function Reviews() {
  return (
    <main>
      {/* breadcrumb-start */}
      <Breadcrumb pageTitle="Reviews" />
      {/* breadcrumb-end */}

      <section className="blog__area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-xl-8 col-lg-8">
              <TestimonialThree />
              <ReplyForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
