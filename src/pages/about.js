import React from 'react';
import HeaderThree from '../components/Layout/Header/HeaderStyleThree';
import FooterThree from '../components/Layout/Footer/FooterStyleThree';
import AboutMain from '../components/About/AboutMain';
import Header from '../components/Layout/Header/Header';

class AboutPage extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <Header />
            <AboutMain />
            <FooterThree />
            </React.Fragment>
        );
    }
}


export default AboutPage;

