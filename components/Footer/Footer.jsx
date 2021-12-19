export const Footer = () => (
  <footer className="site-footer">
    <div className="site-footer__top">
      <div
        className="site-footer-top-bg"
        style={{
          backgroundImage: 'url(assets/images/backgrounds/site-footer-bg.jpg)',
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
                  <img src="/images/logo.png" alt />
                </a>
              </div>
              <p className="footer-widget__about-text">
                Welcome to our website design agency. Lore ipsum simply text
                amet cing elit.
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
              <h3 className="footer-widget__title">Sign up for newsletter</h3>
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
                © Copyright {new Date().getFullYear()} by{' '}
                <a href="https://coder.place">CoderPlace</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
