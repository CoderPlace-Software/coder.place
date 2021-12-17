import Image from 'next/image';
import styles from './Reasons.module.scss';

export const Reasons = () => (
  <section className="reasons-one">
    <div className="container">
      <div className="row">
        <div className="col-xl-4">
          <div className="reasons-one__left">
            <div className="section-title text-left">
              <span className="section-title__tagline">How we work</span>
              <h2 className="section-title__title">
                Agile software development process
              </h2>
            </div>
            <ul className="list-unstyled reasons-one__icon-box">
              <li>
                <span className="icon-training" />
                <p className="reasons-one__text">Predictable</p>
              </li>
              <li>
                <span className="icon-strategy" />
                <p className="reasons-one__text">Quality-driven</p>
              </li>
            </ul>
            <p className="reasons-one__text-1">
              When software is important to your business, you cannot trust to
              chance. Reliability is everything and proven processes with right
              methodology are key to success.
            </p>
            <a href="#" className="thm-btn">
              <span>Discover more</span>
            </a>
            {/* /.thm-btn */}
          </div>
        </div>
        <div className="col-xl-8 d-none d-xl-block">
          <div className="reasons-one__img-box">
            <div className="reasons-one-img-box-bg" />
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className={`reasons-one__img-one ${styles.reasonOne}`}>
                  <Image
                    src="/images/agile1.jpg"
                    width={400}
                    height={612}
                    objectFit="cover"
                  />
                  <div className="reasons-one__shape-1" />
                  <div className="reasons-one__shape-2" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className={`reasons-one__img-two ${styles.reasonTwo}`}>
                  <Image
                    src="/images/agile2.jpg"
                    width={400}
                    height={349}
                    objectFit="cover"
                  />
                </div>
                <div
                  className={`reasons-one__img-three reasons-one__img-two ${styles.reasonThree}`}
                >
                  <Image
                    src="/images/agile3.jpg"
                    width={402}
                    height={231}
                    objectFit="cover"
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
