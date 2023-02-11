import React from 'react';
import Footer from '../components/Layout/Footer/Footer';
import CourseGridMain from '../components/CourseGrid/CourseGridMain';
import HeaderThree from '../components/Layout/Header/HeaderStyleThree';
import Header from '../components/Layout/Header/Header';
import Packages from '../components/Packages/Packages';
import Breadcrumb from '../components/Common/Breadcrumb';

class CourseGrid extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <Header />
			{/* <Breadcrumb/> */}
            <Packages/>
            <Footer />
            </React.Fragment>
        );
    }
}


export default CourseGrid;

