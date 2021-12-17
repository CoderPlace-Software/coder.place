import styles from './Portfolio.module.scss';
import { projects } from '../../cms/data';
import Image from 'next/image';

export const Portfolio = () => (
  <section className="portfolio-one" id="portfolio">
    <div className="portfolio-one__container">
      <div className={`section-title text-center ${styles.header}`}>
        <span className="section-title__tagline">Recent work completed</span>
        <h2 className="section-title__title">Work showcase</h2>
      </div>
      <div className="row filter-layout masonary-layout justify-content-center">
        {projects.map((project) => (
          <div
            key={project.id}
            className="col-xl-3 col-lg-6 col-md-6 filter-item bra illus web photo"
          >
            <div className="portfolio-one__single">
              <div className="portfolio-one__img">
                <Image
                  src={project.imageUrl}
                  width={370}
                  height={426}
                  objectFit="cover"
                />
                <div className="portfolio-one__experience">
                  <div className="portfolio-one__web-design">
                    <p className="portfolio-one__web-design-title">
                      {project.title}
                    </p>
                  </div>
                  <div
                    className={`portfolio-one__fimlor ${styles.projectDescription}`}
                  >
                    <p className="portfolio-one__fimlor-title">
                      <a href={project.url}>{project.description}</a>
                    </p>
                  </div>
                  {/*<div className={styles.techStack}>Tech Stack</div>*/}
                </div>
                <div className="portfolio-one__arrow">
                  <a href={project.url}>
                    <span className="icon-right-arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
