import React, { Component } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Breadcrumb from '../Common/Breadcrumb';
import Heading from '../Heading/Heading';
import GetInTouch from './GetInTouchSection';
import Knowledge from './KnowledgeSection';
import "animate.css/animate.min.css";



class ContactMain extends Component {

	render() {

		return (
			<main className='pt-100'>
				{/* breadcrumb-start */}
				<Heading heading={"Contact us"} subHeading={"Have a question or just want to say hi? We'd love to hear from you."} />

				{/* breadcrumb-end */}

				{/* Getintouch-start */}
				<AnimationOnScroll animateIn="animate__fadeInRightBig">
					<GetInTouch />
				</AnimationOnScroll>
				{/* Getintouch-end */}

				{/* Getintouch-start */}
				<AnimationOnScroll animateIn="animate__fadeInLeftBig">

					<Knowledge />
				</AnimationOnScroll>

				{/* Getintouch-end */}

			</main>
		);
	}
}

export default ContactMain;