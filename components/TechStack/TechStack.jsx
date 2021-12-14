import { techStack } from '../../cms/data';
import styles from './TechStack.module.scss';

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
            {/*<div className="row">
              <div className="col-6">
                <div className="we-make__person">
                  <div className="we-make__person-img">
                    <img src="assets/images/resources/person-img-1.png" alt />
                  </div>
                  <div className="we-make__person-text">
                    <p>Ivan</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="we-make__person">
                  <div className="we-make__person-img">
                    <img src="assets/images/resources/person-img-1.png" alt />
                  </div>
                  <div className="we-make__person-text">
                    <p>Ihor</p>
                  </div>
                </div>
              </div>
            </div>*/}
          </div>
        </div>
        <div className="col-xl-5 col-lg-6">
          <div className={styles.techStackWrapper}>
            {techStack.map((tech) => (
              <div
                className={`d-flex flex-column align-items-center`}
                key={tech.icon}
              >
                <i className={`fab ${tech.icon}`} />
                <span>{tech.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
