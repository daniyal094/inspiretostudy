import React from 'react';
import ContactMain from '../components/Contact/ContactMain';
import HeaderThree from '../components/Layout/Header/HeaderStyleThree';
import FooterThree from '../components/Layout/Footer/FooterStyleThree';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';

class Contact extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <Header />
            <ContactMain />
            <Footer />
            </React.Fragment>
        );
    }
}


export default Contact;

