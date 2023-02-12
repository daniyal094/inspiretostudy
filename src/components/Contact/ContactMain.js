import React, { Component } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import Heading from '../Heading/Heading';
import GetInTouch from './GetInTouchSection';
import Knowledge from './KnowledgeSection';


class ContactMain extends Component {

	render() {

		return (
			<main className='pt-100'>
				{/* breadcrumb-start */}
				<Heading heading={"Contact us"} subHeading={"Have a question or just want to say hi? We'd love to hear from you."} />

				{/* breadcrumb-end */}

				{/* Getintouch-start */}
				<GetInTouch />
				{/* Getintouch-end */}

				{/* Getintouch-start */}
				<Knowledge />
				{/* Getintouch-end */}

			</main>
		);
	}
}

export default ContactMain;