export const Header = () => (
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
                        Blog left sidebar <span className="new-tag">new</span>
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
);
