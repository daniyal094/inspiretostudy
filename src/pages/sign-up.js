import React from 'react';
import FooterThree from '../components/Layout/Footer/FooterStyleThree';
import Header from '../components/Layout/Header/Header';
import HeaderFour from '../components/Layout/Header/HeaderStyleFour';
import SignUpMain from '../components/SignUp/SignUpMain';
import Footer from "../components/Layout/Footer/Footer";


class SignIn extends React.Component {

    static getInitialProps({ store }) { }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <SignUpMain />
                <Footer />
            </React.Fragment>
        );
    }
}


export default SignIn;