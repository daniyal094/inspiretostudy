import React, { Component } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import TeacherTwo from './TeacherSectionTwo';
import Banner from '../Home/BannerSection';
import Cta from '../Home/CtaSection';
import Heading from '../Heading/Heading';


class InstructorMain extends Component {

	render() {

		return (
			<main className='mt-5 pt-100'>
				{/* breadcrumb-end */}
				<Heading heading={"Out Coaches"} subHeading={"You don't have to struggle alone, you've got our assistance and help."} />

				{/* Teacher-start */}
				<TeacherTwo />
				{/* Teacher-end */}

				{/* cta-start */}
				{/* <Banner /> */}
				{/* cta-end */}

				{/* cta-start */}
				{/* <Cta /> */}
				{/* cta-end */}
			</main>
		);
	}
}

export default InstructorMain;