import React, { Component } from 'react';
import Hero from './HeroSection';
import Category from './CategorySection';
import Banner from './BannerSection';
import Event from './EventSection';
import Cta from './CtaSection';
import PriceTab from '../Elements/Tab/PriceTab';
import CourseTab from '../Elements/Tab/CourseTab';
import HeroSlider from '../Layout/Header/HeroSlider';
import About from '../HomeTwo/AboutSection';

class HomeMain extends Component {

	render() {

		return (
			<main>
				<HeroSlider />
				{/* hero-start */}
				<Hero />
				{/* hero-end */}

				{/* category-start */}
				{/* <Category /> */}
				{/* category-end */}

				{/* banner-start */}
				{/* <Banner /> */}
				{/* banner-end */}
				<div className='mt-30'>
                    <About />
                </div>
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