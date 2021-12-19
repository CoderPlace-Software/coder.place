import { companySocials, general } from '../../cms/data';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Image from 'next/image';
import logoObj from '@public/images/logo.png';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';

const menu = [
  {
    url: '#services',
    title: 'Services',
  },
  {
    url: '#team',
    title: 'Team',
  },
  {
    url: '#portfolio',
    title: 'Portfolio',
  },
  {
    url: '#blog',
    title: 'Blog',
  },
  {
    url: '#contact',
    title: 'Contact',
  },
];

export const Header = () => (
  <header className="main-header clearfix">
    <nav className="main-menu clearfix">
      <div className="main-menu-wrapper clearfix">
        <div className="main-menu-wrapper__left clearfix">
          <div className="main-menu-wrapper__logo">
            <Link href="/">
              <Image
                src={logoObj}
                width={250}
                height={48}
                placeholder="blur"
                objectFit="cover"
              />
            </Link>
          </div>

          <div className="main-menu-wrapper__social">
            {companySocials.map((social) => (
              <a
                key={social.url}
                href={social.url}
                target="_blank"
                rel="noopener nofollow noreferrer"
                className={styles.socialLink}
              >
                {social.icon && <FontAwesomeIcon icon={social.icon} />}
                {social.iconCustom && (
                  <social.iconCustom style={social.customStyle} />
                )}
              </a>
            ))}
          </div>
        </div>
        <div className="main-menu-wrapper__main-menu">
          <a href="#" className="mobile-nav__toggler">
            <span />
          </a>
          <ul className="main-menu__list">
            {/*<li className="dropdown">
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
            </li>*/}

            {menu.map((item) => (
              <li key={item.title}>
                <Link href={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="main-menu-wrapper__right">
          <div className="main-menu-wrapper__right-contact-box">
            <div
              className={`main-menu-wrapper__right-contact-icon ${styles.messengerIconWrapper}`}
            >
              <FontAwesomeIcon icon={faFacebookMessenger} />
            </div>
            <div className="main-menu-wrapper__right-contact-number">
              <a
                href={general.messengerUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                Send a Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
);
