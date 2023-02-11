import React, { Component } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Link from "next/link";

class TestimonialThree extends Component {
  render() {
    return (
      <section
        className="testimonial__area pt-145 pb-150"
        style={{
          backgroundImage: `url(${"assets/img/testimonial/home-3/testimonial-bg-3.jpg"})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-10">
              <div className="testimonial__slider-3">
                <h3 className="testimonial__title">
                  Student <br /> Community Feedback
                </h3>
                <div className="testimonial__slider-wrapper swiper-container testimonial-text mb-35">
                  <div className="swiper-wrapper">
                    <Swiper
                      // install Swiper modules
                      modules={[
                        Navigation,
                        Pagination,
                        Scrollbar,
                        A11y,
                        Autoplay,
                      ]}
                      spaceBetween={30}
                      slidesPerView={1}
                      autoplaydisableoninteraction={"false"}
                      autoplay={true}
                      loop={true}
                      breakpoints={{
                        // when window width is >= 768px
                        768: {
                          slidesPerView: 1,
                        },
                        1200: {
                          // when window width is >= 992px
                          slidesPerView: 1,
                        },
                      }}
                    >
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="testimonial__item-3">
                            <p>
                              “After I started learning design with Quillow, I
                              realized that I had improved to very advanced
                              levels. While I am studying at my university, I
                              design as an additional income and I am sure that
                              I will do this professionally.”
                            </p>

                            <div className="testimonial__info-2 mb-45">
                              <h4>James Lee,</h4>
                              <span>Student @Educal University</span>
                            </div>

                            <div className="testimonial__nav-thumb">
                              <img
                                src="assets/img/testimonial/home-3/testi-1.jpg"
                                alt="img not found"
                              />
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="testimonial__item-3">
                            <p>
                              “After I started learning design with Quillow, I
                              realized that I had improved to very advanced
                              levels. While I am studying at my university, I
                              design as an additional income and I am sure that
                              I will do this professionally.”
                            </p>

                            <div className="testimonial__info-2 mb-45">
                              <h4>James Lee,</h4>
                              <span>Student @Educal University</span>
                            </div>

                            <div className="testimonial__nav-thumb">
                              <img
                                src="assets/img/testimonial/home-3/testi-2.jpg"
                                alt="img not found"
                              />
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="testimonial__item-3">
                            <p>
                              “After I started learning design with Quillow, I
                              realized that I had improved to very advanced
                              levels. While I am studying at my university, I
                              design as an additional income and I am sure that
                              I will do this professionally.”
                            </p>

                            <div className="testimonial__info-2 mb-45">
                              <h4>James Lee,</h4>
                              <span>Student @Educal University</span>
                            </div>

                            <div className="testimonial__nav-thumb">
                              <img
                                src="assets/img/testimonial/home-3/testi-3.jpg"
                                alt="img not found"
                              />
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="testimonial__item-3">
                            <p>
                              “After I started learning design with Quillow, I
                              realized that I had improved to very advanced
                              levels. While I am studying at my university, I
                              design as an additional income and I am sure that
                              I will do this professionally.”
                            </p>

                            <div className="testimonial__info-2 mb-45">
                              <h4>James Lee,</h4>
                              <span>Student @Educal University</span>
                            </div>

                            <div className="testimonial__nav-thumb">
                              <img
                                src="assets/img/testimonial/home-3/testi-2.jpg"
                                alt="img not found"
                              />
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TestimonialThree;
