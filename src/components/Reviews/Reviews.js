import React from "react";
import ReplyForm from "../BlogDetails/ReplyFormSection";
import Breadcrumb from "../Common/Breadcrumb";
import Heading from "../Heading/Heading";
import TestimonialThree from "../HomeThree/TestimonialSectionThree";
import WriteReviews from "./WriteReviews";

export default function Reviews() {
  return (
    <main className='mt-5 pt-100'>
      {/* breadcrumb-start */}
      <Heading heading={"Reviews"} subHeading={"Share your Thoughts"} />
      {/* breadcrumb-end */}

      <section className="blog__area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-xl-8 col-lg-8">
              <ReplyForm />
              <TestimonialThree />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
