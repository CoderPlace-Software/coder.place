export const TechStack = () => (
  <section className="we-make">
    <div
      className="we-make-bg"
      style={{
        backgroundImage: 'url(assets/images/backgrounds/we-make-bg.jpg)',
      }}
    />
    <div className="container">
      <div className="row">
        <div className="col-xl-7 col-lg-6">
          <div className="we-make__left">
            <div className="section-title text-left">
              <span className="section-title__tagline">Technical Stack</span>
              <h2 className="section-title__title">
                We use the top-notch technology
              </h2>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="we-make__person">
                  <div className="we-make__person-img">
                    <img src="assets/images/resources/person-img-1.png" alt />
                  </div>
                  <div className="we-make__person-text">
                    <p>Ivan</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="we-make__person">
                  <div className="we-make__person-img">
                    <img src="assets/images/resources/person-img-1.png" alt />
                  </div>
                  <div className="we-make__person-text">
                    <p>Ihor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-5 col-lg-6">
          <div className="we-make__right">
            <div className="we-make__progress">
              <div className="we-make__progress-single">
                <h4 className="we-make__progress-title">React ICON</h4>
                <div className="bar">
                  <div className="bar-inner count-bar" data-percent="90%">
                    <div className="count-text">90%</div>
                  </div>
                </div>
              </div>
              <div className="we-make__progress-single">
                <h4 className="we-make__progress-title">Python ICON</h4>
                <div className="bar">
                  <div className="bar-inner count-bar" data-percent="46%">
                    <div className="count-text">46%</div>
                  </div>
                </div>
              </div>
              <div className="we-make__progress-single">
                <h4 className="we-make__progress-title">Web application</h4>
                <div className="bar marb-0">
                  <div className="bar-inner count-bar" data-percent="38%">
                    <div className="count-text">38%</div>
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
