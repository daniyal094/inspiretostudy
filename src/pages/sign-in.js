import React from 'react';
import SignInMain from '../components/SignIn/SignInMain';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';

class SignIn extends React.Component {

    static getInitialProps({ store }) { }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <SignInMain />
                <Footer/>
            </React.Fragment>
        );
    }
}


export default SignIn;