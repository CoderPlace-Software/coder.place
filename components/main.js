export const Main = () => {
  return (
    <div>
      <div className="page-wrapper">
        <header className="main-header clearfix">
          <nav className="main-menu clearfix">
            <div className="main-menu-wrapper clearfix">
              <div className="main-menu-wrapper__left clearfix">
                <div className="main-menu-wrapper__logo">
                  <a href="index.html">
                    <img src="assets/images/resources/logo.png" alt="" />
                  </a>
                </div>
                <div className="main-menu-wrapper__search-box">
                  <a
                    href="#"
                    className="main-menu-wrapper__search search-toggler icon-magnifying-glass"
                  />
                </div>
                <div className="main-menu-wrapper__social">
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#" className="clr-fb">
                    <i className="fab fa-facebook" />
                  </a>
                  <a href="#" className="clr-dri">
                    <i className="fab fa-pinterest-p" />
                  </a>
                  <a href="#" className="clr-ins">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
              <div className="main-menu-wrapper__main-menu">
                <a href="#" className="mobile-nav__toggler">
                  <span />
                </a>
                <ul className="main-menu__list">
                  <li className="dropdown">
                    <a href="index.html">Home</a>
                    <ul>
                      <li>
                        <a href="index.html">Home one</a>
                      </li>
                      <li>
                        <a href="index2.html">Home two</a>
                      </li>
                      <li>
                        <a href="index3.html">
                          Home three <span className="new-tag">new</span>
                        </a>
                      </li>
                      <li>
                        <a href="index-one-page.html">Home one page</a>
                      </li>
                      <li className="dropdown">
                        <a href="#">Header styles</a>
                        <ul>
                          <li>
                            <a href="index.html">Header one</a>
                          </li>
                          <li>
                            <a href="index2.html">Header two</a>
                          </li>
                          <li>
                            <a href="index3.html">Header three</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#">Services </a>
                    <ul>
                      <li>
                        <a href="services.html">Services</a>
                      </li>
                      <li>
                        <a href="services-2.html">
                          Services two <span className="new-tag">New</span>
                        </a>
                      </li>
                      <li>
                        <a href="services-3.html">
                          Services three <span className="new-tag">New</span>
                        </a>
                      </li>
                      <li>
                        <a href="web-development.html">Web development</a>
                      </li>
                      <li>
                        <a href="website-design.html">Web design</a>
                      </li>
                      <li>
                        <a href="web-application.html">Web application</a>
                      </li>
                      <li>
                        <a href="content-writing.html">Content writing</a>
                      </li>
                      <li>
                        <a href="ui-ux-design.html">UI/UX designing</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#">Pages</a>
                    <ul>
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li>
                        <a href="about-me.html">
                          About me <span className="new-tag">new</span>
                        </a>
                      </li>
                      <li>
                        <a href="our-mission.html">
                          Our mission <span className="new-tag">New</span>
                        </a>
                      </li>
                      <li>
                        <a href="team.html">Team</a>
                      </li>
                      <li>
                        <a href="testimonials.html">
                          Testimonials <span className="new-tag">New</span>
                        </a>
                      </li>
                      <li>
                        <a href="testimonials-2.html">
                          Testimonials two <span className="new-tag">New</span>
                        </a>
                      </li>
                      <li>
                        <a href="faqs.html">FAQs</a>
                      </li>
                      <li>
                        <a href="404.html">404</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#">Portfolio</a>
                    <ul>
                      <li>
                        <a href="portfolio.html">Portfolio</a>
                      </li>
                      <li>
                        <a href="portfolio-detail.html">Portfolio details</a>
                      </li>
                      <li>
                        <a href="portfolio-detail-fullwidth.html">
                          Portfolio details full
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="products.html">Shop</a>
                    <ul>
                      <li>
                        <a href="products.html">Shop</a>
                      </li>
                      <li>
                        <a href="product-details.html">Product Details</a>
                      </li>
                      <li>
                        <a href="cart.html">Cart Page</a>
                      </li>
                      <li>
                        <a href="checkout.html">Checkout Page</a>
                      </li>
                      <li>
                        <a href="login.html">Login Page</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#">Blog</a>
                    <ul>
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li className="dropdown">
                        <a href="blog-sidebar.html">
                          Blog sidebar <span className="new-tag">new</span>
                        </a>
                        <ul>
                          <li>
                            <a href="blog-sidebar-left.html">
                              Blog left sidebar{' '}
                              <span className="new-tag">new</span>
                            </a>
                          </li>
                          <li>
                            <a href="blog-sidebar.html">Blog right sidebar</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="blog-details.html">Blog details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="main-menu-wrapper__right">
                <div className="main-menu-wrapper__right-contact-box">
                  <div className="main-menu-wrapper__right-contact-icon">
                    <span className="icon-phone-call" />
                  </div>
                  <div className="main-menu-wrapper__right-contact-number">
                    <a href="tel:92-666-888-0000">92 666 888 0000</a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <div className="stricky-header stricked-menu main-menu">
          <div className="sticky-header__content" />
          {/* /.sticky-header__content */}
        </div>
        {/* /.stricky-header */}
        {/* Banner One Start */}
        <section className="main-slider">
          <div
            className="swiper-container thm-swiper__slider"
            data-swiper-options='{"slidesPerView": 1, "loop": true,
    "effect": "fade",
     "pagination": {
        "el": "#main-slider-pagination",
        "type": "bullets",
        "clickable": true
      },
    "navigation": {
        "nextEl": "#main-slider__swiper-button-next",
        "prevEl": "#main-slider__swiper-button-prev"
    },
    "autoplay": {
        "delay": 5000
    }}'
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div
                  className="image-layer"
                  style={{
                    backgroundImage:
                      'url(assets/images/backgrounds/main-slider-1-1.jpg)',
                  }}
                ></div>
                <div className="image-layer-overlay" />
                <div className="main-slider-shape-1" />
                <div className="main-slider-shape-2" />
                <div className="main-slider-shape-3" />
                <div className="main-slider-shape-4" />
                {/* /.image-layer */}
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="main-slider__content">
                        <p>welcome to Moniz Web agency</p>
                        <h2>
                          Smart web <br /> design agency
                        </h2>
                        <a href="contact.html" className="thm-btn">
                          <span>Free consultation</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div
                  className="image-layer"
                  style={{
                    backgroundImage:
                      'url(assets/images/backgrounds/main-slider-1-2.jpg)',
                  }}
                ></div>
                <div className="image-layer-overlay" />
                <div className="main-slider-shape-1" />
                <div className="main-slider-shape-2" />
                <div className="main-slider-shape-3" />
                <div className="main-slider-shape-4" />
                {/* /.image-layer */}
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="main-slider__content">
                        <p>welcome to Moniz Web agency</p>
                        <h2>
                          Smart web <br /> design agency
                        </h2>
                        <a href="contact.html" className="thm-btn">
                          <span>Free consultation</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div
                  className="image-layer"
                  style={{
                    backgroundImage:
                      'url(assets/images/backgrounds/main-slider-1-3.jpg)',
                  }}
                ></div>
                <div className="image-layer-overlay" />
                <div className="main-slider-shape-1" />
                <div className="main-slider-shape-2" />
                <div className="main-slider-shape-3" />
                <div className="main-slider-shape-4" />
                {/* /.image-layer */}
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="main-slider__content">
                        <p>welcome to Moniz Web agency</p>
                        <h2>
                          Smart web <br /> design agency
                        </h2>
                        <a href="contact.html" className="thm-btn">
                          <span>Free consultation</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* If we need navigation buttons */}
            <div className="slider-bottom-box clearfix">
              <div className="main-slider__nav">
                <div
                  className="swiper-button-prev"
                  id="main-slider__swiper-button-next"
                >
                  <i className="icon-right-arrow icon-left-arrow" />
                </div>
                <div
                  className="swiper-button-next"
                  id="main-slider__swiper-button-prev"
                >
                  <i className="icon-right-arrow" />
                </div>
              </div>
              <div className="swiper-pagination" id="main-slider-pagination" />
            </div>
          </div>
        </section>
        {/*Banner One End*/}
        {/*Welcome One Start*/}
        <section className="welcome-one">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div
                  className="welcome-one__left wow fadeInLeft"
                  data-wow-duration="1500ms"
                >
                  <div className="welcome-one__img-box">
                    <div className="welcome-one__img">
                      <img
                        src="assets/images/resources/welcome-one-img-1.png"
                        alt=""
                      />
                      <div className="welcome-one__shape-1" />
                      <div className="welcome-one__shape-2" />
                    </div>
                    <div className="welcome-one__trusted">
                      <p>Trusted by</p>
                      <h2 className="odometer" data-count={4890}>
                        00
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="welcome-one__right">
                  <div className="section-title text-left">
                    <span className="section-title__tagline">
                      About company
                    </span>
                    <h2 className="section-title__title">
                      We provide the best web services
                    </h2>
                  </div>
                  <div className="welcome-one__solutions">
                    <div className="welcome-one__solutions-single">
                      <div className="welcome-one__solutions-icon">
                        <span className="icon-tick" />
                      </div>
                      <div className="welcome-one__solutions-text-box">
                        <p>
                          Solution for small &amp; <br /> large businesses
                        </p>
                      </div>
                    </div>
                    <div className="welcome-one__solutions-single">
                      <div className="welcome-one__solutions-icon">
                        <span className="icon-tick" />
                      </div>
                      <div className="welcome-one__solutions-text-box">
                        <p>
                          Solution for small &amp; <br /> large businesses
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="welcome-one__right-text-1">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words.
                  </p>
                  <p className="welcome-one__right-text-2">
                    You need to be sure there isnt anything embarrassing hidden
                    in the middle of text. All the lorem ipsum generators on the
                    Internet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Welcome One End*/}
        {/*Counter One Start*/}
        <section className="counters-one">
          <div className="container">
            <ul className="counters-one__box list-unstyled">
              <li
                className="counter-one__single wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="counter-one__icon">
                  <span className="icon-recommend" />
                </div>
                <h3 className="odometer" data-count={860}>
                  00
                </h3>
                <p className="counter-one__text">Projects completed</p>
              </li>
              <li
                className="counter-one__single wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="counter-one__icon">
                  <span className="icon-recruit" />
                </div>
                <h3 className="odometer" data-count={50}>
                  00
                </h3>
                <p className="counter-one__text">Active clients</p>
              </li>
              <li
                className="counter-one__single wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="counter-one__icon">
                  <span className="icon-coffee" />
                </div>
                <h3 className="odometer" data-count={93}>
                  00
                </h3>
                <p className="counter-one__text">Cups of coffee</p>
              </li>
              <li
                className="counter-one__single wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="counter-one__icon">
                  <span className="icon-customer-review" />
                </div>
                <h3 className="odometer" data-count={970}>
                  00
                </h3>
                <p className="counter-one__text">Happy clients</p>
              </li>
              <li
                className="counter-one__shape wow fadeInUp"
                data-wow-delay="500ms"
              />
            </ul>
          </div>
        </section>
        {/*Counter One End*/}
        {/*We Change Start*/}
        <section className="we-change">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="we-change__left-faqs">
                  <div className="section-title text-left">
                    <span className="section-title__tagline">
                      Frequently asked questions
                    </span>
                    <h2 className="section-title__title">
                      We’re here to change your business look
                    </h2>
                  </div>
                  <div className="we-change__faqs">
                    <div
                      className="accrodion-grp"
                      data-grp-name="faq-one-accrodion"
                    >
                      <div className="accrodion active">
                        <div className="accrodion-title">
                          <h4>Few resons why you should choose us</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>
                              Suspendisse finibus urna mauris, vitae consequat
                              quam vel. Vestibulum leo ligula, vitae commodo
                              nisl.
                            </p>
                          </div>
                          {/* /.inner */}
                        </div>
                      </div>
                      <div className="accrodion">
                        <div className="accrodion-title">
                          <h4>Few resons why you should choose us</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>
                              Suspendisse finibus urna mauris, vitae consequat
                              quam vel. Vestibulum leo ligula, vitae commodo
                              nisl.
                            </p>
                          </div>
                          {/* /.inner */}
                        </div>
                      </div>
                      <div className="accrodion last-chiled">
                        <div className="accrodion-title">
                          <h4>Few resons why you should choose us</h4>
                        </div>
                        <div className="accrodion-content">
                          <div className="inner">
                            <p>
                              Suspendisse finibus urna mauris, vitae consequat
                              quam vel. Vestibulum leo ligula, vitae commodo
                              nisl.
                            </p>
                          </div>
                          {/* /.inner */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="we-change__right">
                  <div className="we-change__right-img">
                    <img
                      src="assets/images/resources/we-change-right-img-1.jpg"
                      alt=""
                    />
                    <div className="we-change__agency">
                      <div className="we-change__agency-icon">
                        <span className="icon-development" />
                      </div>
                      <div className="we-change__agency-text">
                        <h3>
                          Our agency is one of the most <br /> successful
                          agency.
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*We Change End*/}
        {/*We Make Start*/}
        <section className="we-make">
          <div
            className="we-make-bg"
            style={{
              backgroundImage: 'url(assets/images/backgrounds/we-make-bg.jpg)',
            }}
          />
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-6">
                <div className="we-make__left">
                  <div className="section-title text-left">
                    <span className="section-title__tagline">
                      Corporate business theme
                    </span>
                    <h2 className="section-title__title">
                      We make the quality design &amp; developments
                    </h2>
                  </div>
                  <div className="we-make__person">
                    <div className="we-make__person-img">
                      <img
                        src="assets/images/resources/person-img-1.png"
                        alt=""
                      />
                    </div>
                    <div className="we-make__person-text">
                      <p>John Smith</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="we-make__right">
                  <div className="we-make__progress">
                    <div className="we-make__progress-single">
                      <h4 className="we-make__progress-title">Web design</h4>
                      <div className="bar">
                        <div className="bar-inner count-bar" data-percent="90%">
                          <div className="count-text">90%</div>
                        </div>
                      </div>
                    </div>
                    <div className="we-make__progress-single">
                      <h4 className="we-make__progress-title">
                        Web development
                      </h4>
                      <div className="bar">
                        <div className="bar-inner count-bar" data-percent="46%">
                          <div className="count-text">46%</div>
                        </div>
                      </div>
                    </div>
                    <div className="we-make__progress-single">
                      <h4 className="we-make__progress-title">
                        Web application
                      </h4>
                      <div className="bar marb-0">
                        <div className="bar-inner count-bar" data-percent="38%">
                          <div className="count-text">38%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*We Make End*/}
        {/*Services One Start*/}
        <section className="services-one">
          <div
            className="services-one-bg"
            style={{
              backgroundImage:
                'url(assets/images/backgrounds/services-one-bg.jpg)',
            }}
          ></div>
          <div className="container">
            <div className="section-title text-center">
              <span className="section-title__tagline">Our services list</span>
              <h2 className="section-title__title">What we’re offering</h2>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4">
                {/*Services One Single*/}
                <div
                  className="services-one__single wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div className="services-one__icon">
                    <span className="icon-color-sample" />
                  </div>
                  <h3 className="services-one__title">
                    <a href="website-design.html">Website design</a>
                  </h3>
                  <p className="services-one__text">
                    Lorem ipsum dolor sit amet, consectetur notted adipisicing
                    elit sed do.
                  </p>
                  <a href="website-design.html" className="service-one__arrow">
                    <span className="icon-right-arrow" />
                  </a>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                {/*Services One Single*/}
                <div
                  className="services-one__single wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div className="services-one__icon">
                    <span className="icon-front-end" />
                  </div>
                  <h3 className="services-one__title">
                    <a href="web-development.html">Web development</a>
                  </h3>
                  <p className="services-one__text">
                    Lorem ipsum dolor sit amet, consectetur notted adipisicing
                    elit sed do.
                  </p>
                  <a href="web-development.html" className="service-one__arrow">
                    <span className="icon-right-arrow" />
                  </a>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                {/*Services One Single*/}
                <div
                  className="services-one__single wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div className="services-one__icon">
                    <span className="icon-online-shopping" />
                  </div>
                  <h3 className="services-one__title">
                    <a href="web-application.html">Web application</a>
                  </h3>
                  <p className="services-one__text">
                    Lorem ipsum dolor sit amet, consectetur notted adipisicing
                    elit sed do.
                  </p>
                  <a href="web-application.html" className="service-one__arrow">
                    <span className="icon-right-arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Services One End*/}
        {/*Portfolio One Start*/}
        <section className="portfolio-one">
          <div className="portfolio-one__container">
            <div className="section-title text-center">
              <span className="section-title__tagline">
                Recent work completed
              </span>
              <h2 className="section-title__title">Work showcase</h2>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <ul className="portfolio-filter style1 post-filter has-dynamic-filters-counter list-unstyled">
                  <li data-filter=".filter-item" className="active">
                    <span className="filter-text">All</span>
                  </li>
                  <li data-filter=".bra">
                    <span className="filter-text">Branding</span>
                  </li>
                  <li data-filter=".illus">
                    <span className="filter-text">illustration</span>
                  </li>
                  <li data-filter=".photo">
                    <span className="filter-text">Photography</span>
                  </li>
                  <li data-filter=".web">
                    <span className="filter-text last-pd-none">Web design</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row filter-layout masonary-layout">
              <div className="col-xl-3 col-lg-6 col-md-6 filter-item bra illus web photo">
                {/*Portfolio One Single*/}
                <div
                  className="portfolio-one__single wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div className="portfolio-one__img">
                    <img
                      src="assets/images/resources/portfolio-1-1.jpg"
                      alt=""
                    />
                    <div className="portfolio-one__experience">
                      <div className="portfolio-one__web-design">
                        <p className="portfolio-one__web-design-title">
                          Web design
                        </p>
                      </div>
                      <div className="portfolio-one__fimlor">
                        <p className="portfolio-one__fimlor-title">
                          <a href="portfolio-detail.html">Fimlor Experience</a>
                        </p>
                      </div>
                    </div>
                    <div className="portfolio-one__arrow">
                      <a href="portfolio-detail.html">
                        <span className="icon-right-arrow" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 filter-item bra photo">
                {/*Portfolio One Single*/}
                <div
                  className="portfolio-one__single wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="portfolio-one__img">
                    <img
                      src="assets/images/resources/portfolio-1-2.jpg"
                      alt=""
                    />
                    <div className="portfolio-one__experience">
                      <div className="portfolio-one__web-design">
                        <p className="portfolio-one__web-design-title">
                          Web design
                        </p>
                      </div>
                      <div className="portfolio-one__fimlor">
                        <p className="portfolio-one__fimlor-title">
                          <a href="portfolio-detail.html">Fimlor Experience</a>
                        </p>
                      </div>
                    </div>
                    <div className="portfolio-one__arrow">
                      <a href="portfolio-detail.html">
                        <span className="icon-right-arrow" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 filter-item bra illus web">
                {/*Portfolio One Single*/}
                <div
                  className="portfolio-one__single mar-b-0 margin-bottom-30 wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="portfolio-one__img">
                    <img
                      src="assets/images/resources/portfolio-1-3.jpg"
                      alt=""
                    />
                    <div className="portfolio-one__experience">
                      <div className="portfolio-one__web-design">
                        <p className="portfolio-one__web-design-title">
                          Web design
                        </p>
                      </div>
                      <div className="portfolio-one__fimlor">
                        <p className="portfolio-one__fimlor-title">
                          <a href="portfolio-detail.html">Fimlor Experience</a>
                        </p>
                      </div>
                    </div>
                    <div className="portfolio-one__arrow">
                      <a href="portfolio-detail.html">
                        <span className="icon-right-arrow" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 filter-item bra illus photo">
                {/*Portfolio One Single*/}
                <div
                  className="portfolio-one__single mar-b-0 wow fadeInUp"
                  data-wow-delay="400ms"
                >
                  <div className="portfolio-one__img">
                    <img
                      src="assets/images/resources/portfolio-1-4.jpg"
                      alt=""
                    />
                    <div className="portfolio-one__experience">
                      <div className="portfolio-one__web-design">
                        <p className="portfolio-one__web-design-title">
                          Web design
                        </p>
                      </div>
                      <div className="portfolio-one__fimlor">
                        <p className="portfolio-one__fimlor-title">
                          <a href="portfolio-detail.html">Fimlor Experience</a>
                        </p>
                      </div>
                    </div>
                    <div className="portfolio-one__arrow">
                      <a href="portfolio-detail.html">
                        <span className="icon-right-arrow" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Portfolio One End*/}
        {/*Testimonial One Start*/}
        <section className="testimonial-one">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-5">
                <div className="testimonial-one__left">
                  <div className="section-title text-left">
                    <span className="section-title__tagline">
                      Customer feedback
                    </span>
                    <h2 className="section-title__title">
                      What they are talking about moniz?
                    </h2>
                  </div>
                  <div className="testimonial-one__btn-box">
                    <a
                      href="about.html"
                      className="thm-btn testimonial-one__btn"
                    >
                      <span>All feedbacks</span>
                    </a>
                    <div className="testimonial-one__btn-shape" />
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-lg-7">
                <div className="testimonial-one__slider">
                  <div
                    className="swiper-container"
                    id="testimonials-one__thumb"
                  >
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="testimonial-one__img-holder">
                          <img
                            src="assets/images/testimonial/testimonials-1-1.png"
                            alt=""
                          />
                          <div className="testimonial-one__quote"></div>
                        </div>
                      </div>
                      {/* /.swiper-slide */}
                      <div className="swiper-slide">
                        <div className="testimonial-one__img-holder">
                          <img
                            src="assets/images/testimonial/testimonials-1-2.png"
                            alt=""
                          />
                          <div className="testimonial-one__quote"></div>
                        </div>
                      </div>
                      {/* /.swiper-slide */}
                      <div className="swiper-slide">
                        <div className="testimonial-one__img-holder">
                          <img
                            src="assets/images/testimonial/testimonials-1-3.png"
                            alt=""
                          />
                          <div className="testimonial-one__quote"></div>
                        </div>
                      </div>
                      {/* /.swiper-slide */}
                    </div>
                    {/* /.swiper-wrapper */}
                  </div>
                  {/* /#testimonials-one__thumb.swiper-container */}
                  <div className="testimonials-one__main-content">
                    <div
                      className="swiper-container"
                      id="testimonials-one__carousel"
                    >
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="testimonial-one__conent-box">
                            <p className="testimonial-one__text">
                              This is due to their excellent service,
                              competitive pricing and customer support. It’s
                              throughly refresing to get such a personal touch.
                              Duis aute lorem ipsum is simply.
                            </p>
                            <div className="testimonial-one__client-details">
                              <h4 className="testimonial-one__client-name">
                                Aleesha brown
                              </h4>
                              <span className="testimonial-one__clinet-title">
                                Satisfied customers
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* /.swiper-slide */}
                        <div className="swiper-slide">
                          <div className="testimonial-one__conent-box">
                            <p className="testimonial-one__text">
                              This is due to their excellent service,
                              competitive pricing and customer support. It’s
                              throughly refresing to get such a personal touch.
                              Duis aute lorem ipsum is simply.
                            </p>
                            <div className="testimonial-one__client-details">
                              <h4 className="testimonial-one__client-name">
                                Aleesha brown
                              </h4>
                              <span className="testimonial-one__clinet-title">
                                Satisfied customers
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* /.swiper-slide */}
                        <div className="swiper-slide">
                          <div className="testimonial-one__conent-box">
                            <p className="testimonial-one__text">
                              This is due to their excellent service,
                              competitive pricing and customer support. It’s
                              throughly refresing to get such a personal touch.
                              Duis aute lorem ipsum is simply.
                            </p>
                            <div className="testimonial-one__client-details">
                              <h4 className="testimonial-one__client-name">
                                Aleesha brown
                              </h4>
                              <span className="testimonial-one__clinet-title">
                                Satisfied customers
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* /.swiper-slide */}
                      </div>
                      {/* /.swiper-wrapper */}
                      <div id="testimonials-one__carousel-pagination" />
                      {/* /#testimonials-one__carousel-pagination */}
                    </div>
                    {/* /#testimonials-one__thumb.swiper-container */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Testimonial One End*/}
        {/*Two Boxes Start*/}
        <section className="two-boxes">
          <div className="container">
            <div className="two-boxes__inner">
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="two-boxes__single two-boxes__single-one">
                    <div className="two-boxes__content">
                      <div className="two-boxes__icon">
                        <span className="icon-web-design" />
                      </div>
                      <div className="two-boxes__text">
                        <p>
                          We’re committed to create <br /> a change that matters
                        </p>
                      </div>
                    </div>
                    <div className="two-boxes__arrow">
                      <a href="contact.html">
                        <span className="icon-right-arrow" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="two-boxes__single two-boxes__single-two">
                    <div className="two-boxes__content">
                      <div className="two-boxes__icon">
                        <span className="icon-graphic-design" />
                      </div>
                      <div className="two-boxes__text">
                        <p>
                          We’re committed to create <br /> a change that matters
                        </p>
                      </div>
                    </div>
                    <div className="two-boxes__arrow">
                      <a href="about.html">
                        <span className="icon-right-arrow" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Two Boxes End*/}
        {/*Video One Start*/}
        <section className="video-one">
          <div
            className="video-one-bg jarallax"
            data-jarallax
            data-speed="0.2"
            data-imgposition="50% 0%"
            style={{
              backgroundImage:
                'url(assets/images/backgrounds/video-one-bg.jpg)',
            }}
          />
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="video-one__inner">
                  <div className="video-one__link">
                    <a
                      href="https://www.youtube.com/watch?v=8DP4NgupAhI"
                      className="video-one__btn video-popup"
                    >
                      <div className="video-one__video-icon">
                        <span className="icon-play-button" />
                        <i className="ripple" />
                      </div>
                    </a>
                  </div>
                  <h2 className="video-one__text">
                    We’re shaping the perfect <br /> web solutions
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Video One End*/}
        {/*Reasons One Start*/}
        <section className="reasons-one">
          <div className="container">
            <div className="row">
              <div className="col-xl-4">
                <div className="reasons-one__left">
                  <div className="section-title text-left">
                    <span className="section-title__tagline">Our benefits</span>
                    <h2 className="section-title__title">
                      Reasons why we are best
                    </h2>
                  </div>
                  <ul className="list-unstyled reasons-one__icon-box">
                    <li>
                      <span className="icon-training" />
                      <p className="reasons-one__text">
                        The best user interfaces
                      </p>
                    </li>
                    <li>
                      <span className="icon-strategy" />
                      <p className="reasons-one__text">
                        Quick smooth web development
                      </p>
                    </li>
                  </ul>
                  <p className="reasons-one__text-1">
                    Tincidunt elit magnis nulla facilisis sagittis maecenas.
                    sapien nunc amet ultrices, dolores sit ipsum velit purus
                    aliquet, massa fringilla leo orci not dong right.
                  </p>
                  <a href="about.html" className="thm-btn">
                    <span>Discover more</span>
                  </a>
                  {/* /.thm-btn */}
                </div>
              </div>
              <div className="col-xl-8">
                <div className="reasons-one__img-box">
                  <div className="reasons-one-img-box-bg" />
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="reasons-one__img-one">
                        <img
                          src="assets/images/resources/reasons-one-img-1.jpg"
                          alt=""
                        />
                        <div className="reasons-one__shape-1" />
                        <div className="reasons-one__shape-2" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="reasons-one__img-two">
                        <img
                          src="assets/images/resources/reasons-one-img-3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="reasons-one__img-three reasons-one__img-two">
                        <img
                          src="assets/images/resources/reasons-one-img-2.jpg"
                          alt=""
                        />
                        <div className="reasons-one__shape-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Reasons One End*/}
        {/*Blog One Start*/}
        <section className="blog-one">
          <div className="container">
            <div className="section-title text-center">
              <span className="section-title__tagline">
                Recent work completed
              </span>
              <h2 className="section-title__title">Latest from the blog</h2>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4">
                {/*Blog One Single*/}
                <div
                  className="blog-one__single wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div className="blog-one__img-box">
                    <div className="blog-one__img">
                      <img src="assets/images/blog/blog-1-1.jpg" alt="" />
                      <a href="blog-details.html">
                        <span className="blog-one__plus" />
                      </a>
                    </div>
                    <div className="blog-one__date-box">
                      <p>
                        <span>20</span> May
                      </p>
                    </div>
                  </div>
                  <div className="blog-one__content">
                    <ul className="list-unstyled blog-one__meta">
                      <li>
                        <a href="blog-details.html">
                          <i className="far fa-user-circle" /> By admin
                        </a>
                      </li>
                      <li>
                        <a href="blog-details.html">
                          <i className="far fa-comments" /> 2 Comments
                        </a>
                      </li>
                    </ul>
                    <h3 className="blog-one__title">
                      <a href="blog-details.html">
                        Basic rule of running web agency business
                      </a>
                    </h3>
                    <p className="blog-one__text">
                      Lorem ipsum is simply is text used by copytyping
                      refreshing.
                    </p>
                    <div className="blog-one__bottom">
                      <div className="blog-one__read-btn">
                        <a href="blog-details.html">Read more</a>
                      </div>
                      <div className="blog-one__arrow">
                        <a href="blog-details.html">
                          <span className="icon-right-arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                {/*Blog One Single*/}
                <div
                  className="blog-one__single wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="blog-one__img-box">
                    <div className="blog-one__img">
                      <img src="assets/images/blog/blog-1-2.jpg" alt="" />
                      <a href="blog-details.html">
                        <span className="blog-one__plus" />
                      </a>
                    </div>
                    <div className="blog-one__date-box">
                      <p>
                        <span>20</span> May
                      </p>
                    </div>
                  </div>
                  <div className="blog-one__content">
                    <ul className="list-unstyled blog-one__meta">
                      <li>
                        <a href="blog-details.html">
                          <i className="far fa-user-circle" /> By admin
                        </a>
                      </li>
                      <li>
                        <a href="blog-details.html">
                          <i className="far fa-comments" /> 2 Comments
                        </a>
                      </li>
                    </ul>
                    <h3 className="blog-one__title">
                      <a href="blog-details.html">
                        Leverage frameworks to provide a robust
                      </a>
                    </h3>
                    <p className="blog-one__text">
                      Lorem ipsum is simply is text used by copytyping
                      refreshing.
                    </p>
                    <div className="blog-one__bottom">
                      <div className="blog-one__read-btn">
                        <a href="blog-details.html">Read more</a>
                      </div>
                      <div className="blog-one__arrow">
                        <a href="blog-details.html">
                          <span className="icon-right-arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                {/*Blog One Single*/}
                <div
                  className="blog-one__single wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="blog-one__img-box">
                    <div className="blog-one__img">
                      <img src="assets/images/blog/blog-1-3.jpg" alt="" />
                      <a href="blog-details.html">
                        <span className="blog-one__plus" />
                      </a>
                    </div>
                    <div className="blog-one__date-box">
                      <p>
                        <span>20</span> May
                      </p>
                    </div>
                  </div>
                  <div className="blog-one__content">
                    <ul className="list-unstyled blog-one__meta">
                      <li>
                        <a href="blog-details.html">
                          <i className="far fa-user-circle" /> By admin
                        </a>
                      </li>
                      <li>
                        <a href="blog-details.html">
                          <i className="far fa-comments" /> 2 Comments
                        </a>
                      </li>
                    </ul>
                    <h3 className="blog-one__title">
                      <a href="blog-details.html">
                        Organically grow the holistic world view of
                      </a>
                    </h3>
                    <p className="blog-one__text">
                      Lorem ipsum is simply is text used by copytyping
                      refreshing.
                    </p>
                    <div className="blog-one__bottom">
                      <div className="blog-one__read-btn">
                        <a href="blog-details.html">Read more</a>
                      </div>
                      <div className="blog-one__arrow">
                        <a href="blog-details.html">
                          <span className="icon-right-arrow" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Blog One End*/}
        {/*Brand Two*/}
        <section className="brand-one">
          <div className="container">
            <div
              className="thm-swiper__slider swiper-container"
              data-swiper-options='{"spaceBetween": 100, "slidesPerView": 5, "autoplay": { "delay": 5000 }, "breakpoints": {
                    "0": {
                        "spaceBetween": 30,
                        "slidesPerView": 2
                    },
                    "375": {
                        "spaceBetween": 30,
                        "slidesPerView": 2
                    },
                    "575": {
                        "spaceBetween": 30,
                        "slidesPerView": 3
                    },
                    "767": {
                        "spaceBetween": 50,
                        "slidesPerView": 4
                    },
                    "991": {
                        "spaceBetween": 50,
                        "slidesPerView": 5
                    },
                    "1199": {
                        "spaceBetween": 100,
                        "slidesPerView": 5
                    }
                }}'
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img src="assets/images/brand/brand-1-1.png" alt="" />
                </div>
                {/* /.swiper-slide */}
                <div className="swiper-slide">
                  <img src="assets/images/brand/brand-1-2.png" alt="" />
                </div>
                {/* /.swiper-slide */}
                <div className="swiper-slide">
                  <img src="assets/images/brand/brand-1-3.png" alt="" />
                </div>
                {/* /.swiper-slide */}
                <div className="swiper-slide">
                  <img src="assets/images/brand/brand-1-4.png" alt="" />
                </div>
                {/* /.swiper-slide */}
                <div className="swiper-slide">
                  <img src="assets/images/brand/brand-1-5.png" alt="" />
                </div>
                {/* /.swiper-slide */}
                <div className="swiper-slide">
                  <img src="assets/images/brand/brand-1-1.png" alt="" />
                </div>
                {/* /.swiper-slide */}
                <div className="swiper-slide">
                  <img src="assets/images/brand/brand-1-2.png" alt="" />
                </div>
                {/* /.swiper-slide */}
                <div className="swiper-slide">
                  <img src="assets/images/brand/brand-1-3.png" alt="" />
                </div>
                {/* /.swiper-slide */}
                <div className="swiper-slide">
                  <img src="assets/images/brand/brand-1-4.png" alt="" />
                </div>
                {/* /.swiper-slide */}
                <div className="swiper-slide">
                  <img src="assets/images/brand/brand-1-5.png" alt="" />
                </div>
                {/* /.swiper-slide */}
              </div>
            </div>
          </div>
        </section>
        {/*Brand Two End*/}
        {/*CTA One Start*/}
        <section className="cta-one">
          <div
            className="cta-one-bg"
            style={{
              backgroundImage: 'url(assets/images/backgrounds/cta-one-bg.jpg)',
            }}
          />
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="cta-one__inner">
                  <p className="cta-one__tagline">
                    We can help you stand out your business
                  </p>
                  <h2 className="cta-one__title">
                    Website design services for <br /> your businesses
                  </h2>
                  <a
                    href="contact.html"
                    className="thm-btn cta-one__btn thm-btn--dark--light-hover"
                  >
                    <span>Free consultation</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*CTA One End*/}
        {/*Site Footer One Start*/}
        <footer className="site-footer">
          <div className="site-footer__top">
            <div
              className="site-footer-top-bg"
              style={{
                backgroundImage:
                  'url(assets/images/backgrounds/site-footer-bg.jpg)',
              }}
            />
            <div className="container">
              <div className="row">
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div className="footer-widget__column footer-widget__about">
                    <div className="footer-widget__about-logo">
                      <a href="index.html">
                        <img
                          src="assets/images/resources/footer-logo.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <p className="footer-widget__about-text">
                      Welcome to our website design agency. Lore ipsum simply
                      text amet cing elit.
                    </p>
                    <div className="footer-widget__about-social-list">
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#" className="clr-fb">
                        <i className="fab fa-facebook" />
                      </a>
                      <a href="#" className="clr-dri">
                        <i className="fab fa-pinterest-p" />
                      </a>
                      <a href="#" className="clr-ins">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="footer-widget__column footer-widget__explore clearfix">
                    <h3 className="footer-widget__title">Explore</h3>
                    <ul className="footer-widget__explore-list list-unstyled">
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li>
                        <a href="team.html">Meet our team</a>
                      </li>
                      <li>
                        <a href="#">Case stories</a>
                      </li>
                      <li>
                        <a href="blog.html">Latest news</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="400ms"
                >
                  <div className="footer-widget__column footer-widget__contact">
                    <h3 className="footer-widget__title">Contact</h3>
                    <p className="footer-widget__contact-text">
                      66 Broklyn Street New York United States of America
                    </p>
                    <div className="footer-widget__contact-info">
                      <p>
                        <a
                          href="tel:92-666-888-0000"
                          className="footer-widget__contact-phone"
                        >
                          92 666 888 0000
                        </a>
                        <a
                          href="mailto:needhelp@company.com"
                          className="footer-widget__contact-mail"
                        >
                          needhelp@company.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="400ms"
                >
                  <div className="footer-widget__column footer-widget__newsletter">
                    <h3 className="footer-widget__title">
                      Sign up for newsletter
                    </h3>
                    <form className="footer-widget__newsletter-form">
                      <div className="footer-widget__newsletter-input-box">
                        <input
                          type="email"
                          placeholder="Email Address"
                          name="email"
                        />
                        <button
                          type="submit"
                          className="footer-widget__newsletter-btn"
                        >
                          <i className="fas fa-paper-plane" />
                        </button>
                      </div>
                    </form>
                    <div className="footer-widget__newsletter-bottom">
                      <div className="footer-widget__newsletter-bottom-icon">
                        <i className="fa fa-check" />
                      </div>
                      <div className="footer-widget__newsletter-bottom-text">
                        <p>I agree to all terms and policies</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="site-footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="site-footer-bottom__inner">
                    <p className="site-footer-bottom__copy-right">
                      © Copyright 2021 by <a href="#">Layerdrops.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/*Site Footer One End*/}
      </div>
      {/* /.page-wrapper */}
      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler" />
        {/* /.mobile-nav__overlay */}
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler" />
          <div className="logo-box">
            <a href="index.html" aria-label="logo image">
              <img src="assets/images/resources/logo.png" width={155} alt="" />
            </a>
          </div>
          {/* /.logo-box */}
          <div className="mobile-nav__container" />
          {/* /.mobile-nav__container */}
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope" />
              <a href="mailto:needhelp@packageName__.com">needhelp@moniz.com</a>
            </li>
            <li>
              <i className="fa fa-phone-alt" />
              <a href="tel:666-888-0000">666 888 0000</a>
            </li>
          </ul>
          {/* /.mobile-nav__contact */}
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-facebook-square" />
              <a href="#" className="fab fa-pinterest-p" />
              <a href="#" className="fab fa-instagram" />
            </div>
            {/* /.mobile-nav__social */}
          </div>
          {/* /.mobile-nav__top */}
        </div>
        {/* /.mobile-nav__content */}
      </div>
      {/* /.mobile-nav__wrapper */}
      <div className="search-popup">
        <div className="search-popup__overlay search-toggler" />
        {/* /.search-popup__overlay */}
        <div className="search-popup__content">
          <form action="#">
            <label htmlFor="search" className="sr-only">
              search here
            </label>
            {/* /.sr-only */}
            <input type="text" id="search" placeholder="Search Here..." />
            <button
              type="submit"
              aria-label="search submit"
              className="thm-btn"
            >
              <i className="icon-magnifying-glass" />
            </button>
          </form>
        </div>
        {/* /.search-popup__content */}
      </div>
      {/* /.search-popup */}
    </div>
  );
};
