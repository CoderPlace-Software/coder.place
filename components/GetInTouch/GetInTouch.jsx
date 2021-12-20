import {
  companySocials,
  general,
  office,
  projectsCompleted,
} from '../../cms/data';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './GetInTouch.module.scss';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

export const GetInTouch = () => (
  <section className="get-in-touch" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-xl-6">
          <div
            className="get-in-touch__img wow fadeInLeft"
            data-wow-duration="1500ms"
          >
            <Image
              src={office.photoObj}
              width={500}
              height={472}
              placeholder="blur"
              objectFit="cover"
            />
            <div className="get-in-touch__img-shapes">
              <div className="get-in-touch__img-shape-1" />
              <div className="get-in-touch__img-shape-2" />
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="get-in-touch__right">
            <div className="section-title text-left">
              <span className="section-title__tagline">Contact us</span>
              <h2 className="section-title__title">Get in touch with us</h2>
            </div>
            <div className="get-in-touch__locations">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="get-in-touch__locations-left justify-content-center">
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      href={general.messengerUrl}
                      className={`thm-btn mb-3 ${styles.actionButton}`}
                    >
                      <div className="d-flex">
                        <FontAwesomeIcon
                          className="me-2 position-relative"
                          icon={faFacebookMessenger}
                        />
                        <span>Send a Message </span>
                      </div>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      href={general.calendlyUrl}
                      className={`thm-btn mb-3 ${styles.actionButton}`}
                    >
                      <div className="d-flex">
                        <FontAwesomeIcon
                          className="me-2 position-relative"
                          icon={faCalendar}
                        />
                        <span>Book a Meeting</span>
                      </div>
                    </a>
                    <div
                      className={`mobile-nav__social justify-content-center ${styles.socialNetworkItem}`}
                    >
                      {companySocials.map((social) => (
                        <a
                          key={social.url}
                          href={social.url}
                          target="_blank"
                          rel="noopener nofollow noreferrer"
                          className={styles.socialLink}
                        >
                          {social.icon && (
                            <FontAwesomeIcon icon={social.icon} />
                          )}
                          {social.iconCustom && (
                            <social.iconCustom style={social.customStyle} />
                          )}
                        </a>
                      ))}
                    </div>
                    <h3 className="odometer get-in-touch__locatins-count">
                      {projectsCompleted}
                    </h3>
                    <h4 className="get-in-touch__locatins-count-text">
                      Projects has been completed
                    </h4>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="get-in-touch__locations-right">
                    <div className="get-in-touch__locations-single">
                      <div className="get-in-touch__locations-top">
                        <div className="get-in-touch__locations-icon">
                          <i className="icon-placeholder" />
                        </div>
                        <div className="get-in-touch__locations-title">
                          <h4>{office.location}</h4>
                        </div>
                      </div>
                      <div className="get-in-touch__locations-bottom">
                        <p className="get-in-touch__locations-bottom-tagline">
                          {office.address}
                        </p>
                        <h3>
                          <a
                            href={`mailto:${office.email}`}
                            className="get-in-touch__locations-mail"
                          >
                            {office.email}
                          </a>
                          {office.phone && (
                            <a
                              href="tel:92-666-888-000"
                              className="get-in-touch__locations-phone"
                            >
                              {office.phone}
                            </a>
                          )}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
