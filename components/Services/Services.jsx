export const Services = () => {
  return (
    <section className="services-one" id="services">
      <div
        className="services-one-bg"
        style={{
          backgroundImage: 'url(assets/images/backgrounds/services-one-bg.jpg)',
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
                Lorem ipsum dolor sit amet, consectetur notted adipisicing elit
                sed do.
              </p>
              <a href="#" className="service-one__arrow">
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
                Lorem ipsum dolor sit amet, consectetur notted adipisicing elit
                sed do.
              </p>
              <a href="#" className="service-one__arrow">
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
                Lorem ipsum dolor sit amet, consectetur notted adipisicing elit
                sed do.
              </p>
              <a href="#" className="service-one__arrow">
                <span className="icon-right-arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
