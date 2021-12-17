import { general } from '../../cms/data';

export const PreFooter = () => (
  <section className="cta-two">
    <div className="cta-two-shape-1" />
    <div className="cta-two-shape-2" />
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="cta-two__inner">
            <div className="cta-two__title">
              <h2>Making your business ideas come true</h2>
            </div>
            <div className="cta-two__btn-box">
              <span>
                <a
                  href={general.calendlyUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="thm-btn cta-two__btn thm-btn--dark thm-btn--dark--light-hover"
                >
                  <span>Free Consultation</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
