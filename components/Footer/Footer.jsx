import {
  companySocials,
  general,
  menu,
  office,
  services,
  techStack,
} from '../../cms/data';
import Link from 'next/link';
import styles from '../Header/Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="footer-widget__column footer-widget__about">
              <div className="footer-widget__about-logo">
                <a href="index.html">
                  <img src="/images/logo.png" alt />
                </a>
              </div>
              <p className="footer-widget__about-text">Web Software Makers</p>
              <div className="footer-widget__about-social-list">
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
          </div>
          <div className="col-xl-2 col-lg-6 col-md-6">
            <div className="footer-widget__column footer-widget__explore clearfix">
              <h3 className="footer-widget__title">Company</h3>
              <ul className="footer-widget__explore-list list-unstyled">
                {menu.map((item) => (
                  <li key={item.title}>
                    <Link href={item.url}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-lg-6 col-md-6">
            <div className="footer-widget__column footer-widget__explore clearfix">
              <h3 className="footer-widget__title">Services</h3>
              <ul className="footer-widget__explore-list list-unstyled">
                {services.map((item) => (
                  <li key={item.title}>
                    <Link href={item.url}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-lg-6 col-md-6">
            <div className="footer-widget__column footer-widget__explore clearfix">
              <h3 className="footer-widget__title">Technology</h3>
              <ul className="footer-widget__explore-list list-unstyled">
                {techStack.map((item) => (
                  <li key={item.title}>
                    <Link href={item.url}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="footer-widget__column footer-widget__contact">
              <h3 className="footer-widget__title">Contact</h3>
              <p className="footer-widget__contact-text">
                {office.location} <br /> {office.address}
              </p>
              <div className="footer-widget__contact-info">
                <p>
                  <a
                    href={general.messengerUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-widget__contact-phone"
                  >
                    Send a Message
                  </a>

                  <a
                    href={`mailto:${office.email}`}
                    className="footer-widget__contact-mail"
                  >
                    {office.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/*<div
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
          </div>*/}
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
