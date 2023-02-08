import React from 'react';
import HeaderThree from '../components/Layout/Header/HeaderStyleThree';
import FooterThree from '../components/Layout/Footer/FooterStyleThree';
import CheckoutMain from '../components/Checkout/CheckoutMain';
import Footer from '../components/Layout/Footer/Footer';
import Header from '../components/Layout/Header/Header';

class Checkout extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <Header />
            <CheckoutMain />
            <Footer />
            </React.Fragment>
        );
    }
}


export default Checkout;