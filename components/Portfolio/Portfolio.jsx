import styles from './Portfolio.module.scss';

export const Portfolio = () => (
  <section className="portfolio-one" id="portfolio">
    <div className="portfolio-one__container">
      <div className={`section-title text-center ${styles.header}`}>
        <span className="section-title__tagline">Recent work completed</span>
        <h2 className="section-title__title">Work showcase</h2>
      </div>
      <div className="row filter-layout masonary-layout">
        <div className="col-xl-3 col-lg-6 col-md-6 filter-item bra illus web photo">
          {/*Portfolio One Single*/}
          <div
            className="portfolio-one__single wow fadeInUp"
            data-wow-delay="100ms"
          >
            <div className="portfolio-one__img">
              <img src="assets/images/resources/portfolio-1-1.jpg" alt />
              <div className="portfolio-one__experience">
                <div className="portfolio-one__web-design">
                  <p className="portfolio-one__web-design-title">Web design</p>
                </div>
                <div className="portfolio-one__fimlor">
                  <p className="portfolio-one__fimlor-title">
                    <a href="portfolio-detail.html">Fimlor Experience</a>
                  </p>
                </div>
              </div>
              <div className="portfolio-one__arrow">
                <a href="portfolio-detail.html">
                  <span className="icon-right-arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 filter-item bra photo">
          {/*Portfolio One Single*/}
          <div
            className="portfolio-one__single wow fadeInUp"
            data-wow-delay="200ms"
          >
            <div className="portfolio-one__img">
              <img src="assets/images/resources/portfolio-1-2.jpg" alt />
              <div className="portfolio-one__experience">
                <div className="portfolio-one__web-design">
                  <p className="portfolio-one__web-design-title">Web design</p>
                </div>
                <div className="portfolio-one__fimlor">
                  <p className="portfolio-one__fimlor-title">
                    <a href="portfolio-detail.html">Fimlor Experience</a>
                  </p>
                </div>
              </div>
              <div className="portfolio-one__arrow">
                <a href="portfolio-detail.html">
                  <span className="icon-right-arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 filter-item bra illus web">
          {/*Portfolio One Single*/}
          <div
            className="portfolio-one__single mar-b-0 margin-bottom-30 wow fadeInUp"
            data-wow-delay="300ms"
          >
            <div className="portfolio-one__img">
              <img src="assets/images/resources/portfolio-1-3.jpg" alt />
              <div className="portfolio-one__experience">
                <div className="portfolio-one__web-design">
                  <p className="portfolio-one__web-design-title">Web design</p>
                </div>
                <div className="portfolio-one__fimlor">
                  <p className="portfolio-one__fimlor-title">
                    <a href="portfolio-detail.html">Fimlor Experience</a>
                  </p>
                </div>
              </div>
              <div className="portfolio-one__arrow">
                <a href="portfolio-detail.html">
                  <span className="icon-right-arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 filter-item bra illus photo">
          {/*Portfolio One Single*/}
          <div
            className="portfolio-one__single mar-b-0 wow fadeInUp"
            data-wow-delay="400ms"
          >
            <div className="portfolio-one__img">
              <img src="assets/images/resources/portfolio-1-4.jpg" alt />
              <div className="portfolio-one__experience">
                <div className="portfolio-one__web-design">
                  <p className="portfolio-one__web-design-title">Web design</p>
                </div>
                <div className="portfolio-one__fimlor">
                  <p className="portfolio-one__fimlor-title">
                    <a href="portfolio-detail.html">Fimlor Experience</a>
                  </p>
                </div>
              </div>
              <div className="portfolio-one__arrow">
                <a href="portfolio-detail.html">
                  <span className="icon-right-arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
