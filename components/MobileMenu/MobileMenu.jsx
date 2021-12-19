import Image from 'next/image';
import logoObj from '@public/images/logo.png';
import Link from 'next/link';
import { companySocials, general, office } from '../../cms/data';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './MobileMenu.module.scss';

export const MobileMenu = ({ isVisible, toggleMenu, menuItems }) => {
  return (
    <div className={`mobile-nav__wrapper ${isVisible ? 'expanded' : ''}`}>
      <div
        className="mobile-nav__overlay mobile-nav__toggler"
        onClick={toggleMenu}
      />
      {/* /.mobile-nav__overlay */}
      <div className="mobile-nav__content">
        <span
          className="mobile-nav__close mobile-nav__toggler"
          onClick={toggleMenu}
        />
        <div className="logo-box justify-content-center">
          <Link href="/">
            <Image
              src={logoObj}
              width={188}
              height={38}
              placeholder="blur"
              objectFit="cover"
            />
          </Link>
        </div>
        {/* /.logo-box */}
        <div className="mobile-nav__container">
          <ul className="main-menu__list one-page-scroll-menu">
            {menuItems.map((item) => (
              <li key={item.title} onClick={toggleMenu}>
                <Link href={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* /.mobile-nav__container */}
        <ul className="mobile-nav__contact list-unstyled">
          <li>
            <i className="fa fa-envelope" />
            <a
              target="_blank"
              rel="noopener nofollow noreferrer"
              href={`mailto:${office.email}`}
            >
              {office.email}
            </a>
          </li>
          <li>
            <i className={styles.messengerIcon}>
              <FontAwesomeIcon icon={faFacebookMessenger} />
            </i>
            <a
              href={general.messengerUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              Send a Message
            </a>
          </li>
        </ul>
        {/* /.mobile-nav__contact */}
        <div className="mobile-nav__top justify-content-center">
          <div className="mobile-nav__social">
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
          {/* /.mobile-nav__social */}
        </div>
        {/* /.mobile-nav__top */}
      </div>
      {/* /.mobile-nav__content */}
    </div>
  );
};
