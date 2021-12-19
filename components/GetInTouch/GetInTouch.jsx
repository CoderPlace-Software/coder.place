import { office, projectsCompleted } from '../../cms/data';
import Image from 'next/image';

export const GetInTouch = () => (
  <section className="get-in-touch">
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
              <span className="section-title__tagline">Contact with us</span>
              <h2 className="section-title__title">
                Get in touch with the agency
              </h2>
            </div>
            <div className="get-in-touch__locations">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="get-in-touch__locations-left">
                    <p className="get-in-touch__locations-text">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have in some form.
                    </p>
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
                            href="mailto:hello@coder.place"
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
