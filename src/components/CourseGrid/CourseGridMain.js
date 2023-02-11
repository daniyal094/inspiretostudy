import React, { Component } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import CourseGridTab from '../Elements/Tab/CourseGridTab';
import Cta from '../Home/CtaSection';


class CourseGridMain extends Component {

    render() {

        return (
            <main>
	            {/* breadcrumb-start */}
				{/* breadcrumb-end */}
				
                {/* course tab-start */}
				{/* <CourseGridTab pkgName='Group Package' pkgCategory='Silver' img='/assets/img/course/groupImg.jpg' pkgPrice='Rs. 3,000/-' pkgRating='4.7 (48)' /> */}
				{/* course tab-end */}

                {/* cta-start */}
				{/* <Cta /> */}
				{/* cta-end */}
        	</main>
        );
    }
}

export default CourseGridMain;