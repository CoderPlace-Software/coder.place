import { companySocials, general } from '../../cms/data';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Image from 'next/image';
import logoObj from '@public/images/logo.png';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { useState } from 'react';

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

export const Header = () => {
  const [visible, setVisible] = useState(false);

  console.log('>>> visible');
  console.log(visible);

  const toggleMobileMenu = () => setVisible((prevValue) => !prevValue);

  return (
    <>
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
              <a
                href="#"
                className="mobile-nav__toggler"
                onClick={toggleMobileMenu}
              >
                <span />
              </a>
              <ul className="main-menu__list">
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
      <MobileMenu
        isVisible={visible}
        toggleMenu={toggleMobileMenu}
        menuItems={menu}
      />
    </>
  );
};
