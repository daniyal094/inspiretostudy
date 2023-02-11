import React from 'react';
import HeaderThree from '../components/Layout/Header/HeaderStyleThree';
import FooterThree from '../components/Layout/Footer/FooterStyleThree';
import MyCart from '../components/MyCart/MyCartMain';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';

class Cart extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <Header />
            <MyCart />
            <Footer />
            </React.Fragment>
        );
    }
}


export default Cart;

