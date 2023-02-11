import React, { Component } from 'react';
import ArticleLayout from '../Common/ArticleLayout';
import posts from '../../sample-data/blog-posts/posts.json';
import Breadcrumb from '../Common/Breadcrumb';
import PaginationSection from '../Common/Pagination';
import Search from './SearchSection';
import RecentPost from './RecentPostSection';
import Category from './CategorySecion';
import Tags from './TagsSection';
import SidebarBanner from './SidebarBannerSection';
import Heading from '../Heading/Heading';

class BlogMain extends Component {

    render() {

        return (
            <main className='mt-5 pt-100'>

                {/* breadcrumb-start */}
				{/* <Breadcrumb img={'assets/img/blogging.jpg'}/> */}
            <Heading heading={"Blogs"} subHeading={"Stay Up To Date"}/>

				{/* breadcrumb-end */}

	            <section className="blog__area mt-4 pt-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-12 col-xl-8 col-lg-8">
                            
                                <div className='row'>
                                    {posts && posts.map((post, i) => (
                                    <div key={i} className="col-xxl-4 col-xl-6 col-lg-6 col-md-6">
                                        <ArticleLayout post={post} />
                                    </div>
                                    ))}
                                </div>

                                <PaginationSection />
	                        </div>

	                    </div>
	                </div>
	            </section>
        	</main>
        );
    }
}

export default BlogMain;