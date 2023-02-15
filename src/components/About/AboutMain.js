import React, { Component } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import TestimonialThree from '../HomeThree/TestimonialSectionThree';
import About from '../HomeTwo/AboutSection';
import WhyChoose from '../HomeTwo/WhyChooseSection';
import Counter from '../Elements/Counter/CounterStyleTwo';
import Banner from '../Home/BannerSection';
import dynamic from 'next/dynamic';
import Heading from '../Heading/Heading';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const BrandWithNoSSR = dynamic(() => import('../Elements/Brand/BrandSection'), {
	ssr: false
})


class AboutMain extends Component {

	render() {

		return (
			<main className='mt-5 pt-100'>
				{/* breadcrumb-start */}
				<Heading heading={"About us"} subHeading={"Stay Up To Date"} />

				{/* breadcrumb-end */}

				{/* about-start */}
				<AnimationOnScroll animateIn="animate__fadeInLeftBig">
					<div className='mt-30'>
						<About />

					</div>
				</AnimationOnScroll>
				{/* about-end */}

				{/* brand-start */}
				{/* <BrandWithNoSSR /> */}
				{/* brand-end */}

				{/* testimonial-start */}
				{/* <TestimonialThree /> */}
				{/* testimonial-end */}

				{/* whychoose-start */}
				<AnimationOnScroll animateIn="animate__fadeInRightBig">

					<WhyChoose />
				</AnimationOnScroll>

				{/* whychoose-end */}

				{/* counter-start */}
				<AnimationOnScroll animateIn="animate__fadeInLeftBig">

					<Counter />
				</AnimationOnScroll>

				{/* counter-end */}

				{/* banner-start */}
				{/* <Banner /> */}
				{/* banner-end */}

			</main>
		);
	}
}

export default AboutMain;