import React from 'react';
import HeaderThree from '../components/Layout/Header/HeaderStyleThree';
import BlogDetailsMain from '../components/BlogDetails/BlogDetailsMain';
import FooterThree from '../components/Layout/Footer/FooterStyleThree';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';

class BlogDetails extends React.Component {

    static getInitialProps({ store }) { }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <main>
                    {/* Blog Main */}
                    <BlogDetailsMain />
                    {/* Blog Main End */}
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}


export default BlogDetails;

