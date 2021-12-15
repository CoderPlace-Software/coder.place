export const Video = () => {
  return (
    <section className="video-one video-two">
      <div
        className="video-one-bg"
        style={{
          backgroundImage: 'url(/images/video-bg.jpg)',
        }}
      />
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="video-one__inner">
              <div className="video-one__link">
                <a href="#" className="video-one__btn video-popup">
                  <div className="video-one__video-icon">
                    <span className="icon-play-button" />
                    <i className="ripple" />
                  </div>
                </a>
              </div>
              <h2 className="video-one__text">
                We’re shaping the perfect <br /> web solutions
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
