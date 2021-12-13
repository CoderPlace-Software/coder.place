export const Reasons = () => (
  <section className="reasons-one">
    <div className="container">
      <div className="row">
        <div className="col-xl-4">
          <div className="reasons-one__left">
            <div className="section-title text-left">
              <span className="section-title__tagline">Our benefits</span>
              <h2 className="section-title__title">Reasons why we are best</h2>
            </div>
            <ul className="list-unstyled reasons-one__icon-box">
              <li>
                <span className="icon-training" />
                <p className="reasons-one__text">The best user interfaces</p>
              </li>
              <li>
                <span className="icon-strategy" />
                <p className="reasons-one__text">
                  Quick smooth web development
                </p>
              </li>
            </ul>
            <p className="reasons-one__text-1">
              Tincidunt elit magnis nulla facilisis sagittis maecenas. sapien
              nunc amet ultrices, dolores sit ipsum velit purus aliquet, massa
              fringilla leo orci not dong right.
            </p>
            <a href="about.html" className="thm-btn">
              <span>Discover more</span>
            </a>
            {/* /.thm-btn */}
          </div>
        </div>
        <div className="col-xl-8">
          <div className="reasons-one__img-box">
            <div className="reasons-one-img-box-bg" />
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="reasons-one__img-one">
                  <img
                    src="assets/images/resources/reasons-one-img-1.jpg"
                    alt
                  />
                  <div className="reasons-one__shape-1" />
                  <div className="reasons-one__shape-2" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="reasons-one__img-two">
                  <img
                    src="assets/images/resources/reasons-one-img-3.jpg"
                    alt
                  />
                </div>
                <div className="reasons-one__img-three reasons-one__img-two">
                  <img
                    src="assets/images/resources/reasons-one-img-2.jpg"
                    alt
                  />
                  <div className="reasons-one__shape-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
