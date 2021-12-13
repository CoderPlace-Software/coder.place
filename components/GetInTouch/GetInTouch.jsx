export const GetInTouch = () => (
  <section className="get-in-touch">
    <div className="container">
      <div className="row">
        <div className="col-xl-6">
          <div
            className="get-in-touch__img wow fadeInLeft"
            data-wow-duration="1500ms"
          >
            <img src="assets/images/resources/get-in-touch-img.jpg" alt />
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
                    {/*<h3
                      className="odometer get-in-touch__locatins-count"
                      data-count={35600}
                    >
                      00
                    </h3>
                    <h4 className="get-in-touch__locatins-count-text">
                      Projects has been completed
                    </h4>*/}
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
                          <h4>Lviv, Ukraine</h4>
                        </div>
                      </div>
                      <div className="get-in-touch__locations-bottom">
                        <p className="get-in-touch__locations-bottom-tagline">
                          64a Kulparkivska str
                        </p>
                        <h3>
                          <a
                            href="mailto:hello@coder.place"
                            className="get-in-touch__locations-mail"
                          >
                            hello@coder.place
                          </a>
                          <a
                            href="tel:92-666-888-000"
                            className="get-in-touch__locations-phone"
                          >
                            92 666 888 000
                          </a>
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
