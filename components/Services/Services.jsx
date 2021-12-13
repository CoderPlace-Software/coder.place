import { services } from '../../cms/data';

export const Services = () => {
  return (
    <section className="services-one" id="services">
      <div className="services-one-bg" />
      <div className="container">
        <div className="section-title text-center">
          <span className="section-title__tagline">Our services list</span>
          <h2 className="section-title__title">What we’re offering</h2>
        </div>
        <div className="row">
          {services.map((service) => (
            <div className="col-xl-4 col-lg-4" key={service.title}>
              <div className="services-one__single wow fadeInUp">
                <div className="services-one__icon">
                  <span className={service.icon} />
                </div>
                <h3 className="services-one__title">
                  {service.url && <a href={service.url}>{service.title}</a>}
                  {!service.url && service.title}
                </h3>
                <p className="services-one__text">{service.description}</p>
                {service.url && (
                  <a href={service.url} className="service-one__arrow">
                    <span className="icon-right-arrow" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
