import React from 'react';
import HeaderThree from '../components/Layout/Header/HeaderStyleThree';
import FooterThree from '../components/Layout/Footer/FooterStyleThree';
import AboutMain from '../components/About/AboutMain';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';

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
            <Footer />
            </React.Fragment>
        );
    }
}


export default AboutPage;

