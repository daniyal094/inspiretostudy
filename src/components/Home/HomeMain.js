import React, { Component } from 'react';
import Hero from './HeroSection';
import HeroSlider from '../Layout/Header/HeroSlider';
import About from '../HomeTwo/AboutSection';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";


class HomeMain extends Component {

	render() {
		return (
			<main>

				<HeroSlider />
				{/* hero-start */}
				<div className='pt-150 pb-150 grey-bg-2'>
					<AnimationOnScroll animateIn="animate__fadeInLeftBig">
						<Hero />
					</AnimationOnScroll>
				</div>
				{/* hero-end */}

				{/* category-start */}
				{/* <Category /> */}
				{/* category-end */}
				{/* banner-start */}
				{/* <Banner /> */}
				{/* banner-end */}
				<AnimationOnScroll animateIn="animate__fadeInRightBig">
					<div className='mt-30'>
						<About />
					</div>
				</AnimationOnScroll>
				{/* course-start */}
				{/* <CourseTab /> */}
				{/* course-end */}

				{/* event-start */}
				{/* <Event /> */}
				{/* event-end */}

				{/* tab-start */}
				{/* <PriceTab /> */}
				{/* tab-end */}

				{/* cta-start */}
				{/* <Cta /> */}
				{/* cta-end */}

			</main>
		);
	}
}

export default HomeMain;