<>
        <Header />
        <main>
          {/* breadcrumb-area-start */}
          {newsDetails &&
            newsDetails.map((article, num) => (
              <Breadcrumb key={num} pageTitle={article.title} />
            ))}
          {/* breadcrumb-area-start */}

          {/* blog-area start */}
          <section className="blog__area pt-120 pb-120">
            <div className="container">
              <div className="row">
                <div className="col-xxl-8 col-xl-8 col-lg-8">
                  {newsDetails &&
                    newsDetails.map((article, num) => (
                      <div key={num} className="blog__wrapper">
                        <BlogDesc />
                        <div className="blog__img w-img mb-45">
                          <img src={article.image} alt={article.title} />
                        </div>
                        <div className="blog__text mb-40">
                          <h3>{article.title}</h3>
                          <p>{article.text}</p>
                          <p>{article.textTwo}</p>
                        </div>

                        <div className="blog__line"></div>
                        <BlogMeta />
                        <BlogAuthor />
                        <BlogRecent />
                        <LatestComments />
                        <ReplyForm />
                      </div>
                    ))}
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4">
                  <div className="blog__sidebar pl-70">
                    <Search />
                    <RecentPost />
                    <Category />
                    <Tags />
                    <SidebarBanner />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* blog-area end */}
        </main>
      </>