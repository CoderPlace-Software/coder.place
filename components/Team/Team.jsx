import { team } from '../../cms/data';
import Image from 'next/image';

export const Team = () => {
  return (
    <section className="team-one" id="team">
      <div className="container">
        <div className="section-title text-center">
          <span className="section-title__tagline">Team members</span>
          <h2 className="section-title__title">Meet our experts</h2>
        </div>
        <div className="row justify-content-evenly">
          {team.map((person) => (
            <div key={person.id} className="col-xl-3 col-lg-3 col-md-6">
              <div className="team-one__single">
                <div className="team-one__img-box">
                  <div className="team-one__img">
                    <Image
                      src={person.photoUrl}
                      width={270}
                      height={322}
                      objectFit="cover"
                    />
                  </div>
                  <div className="team-one__social">
                    {person.socials.map((social) => (
                      <a
                        key={social.type}
                        href={social.url}
                        target="_blank"
                        rel="noopener nofollow noreferrer"
                        className="clr-ins"
                      >
                        <i className={`fab ${social.icon}`} />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="team-one__member-info">
                  <h4 className="team-one__member-name">
                    {person.firstName} {person.lastName}
                  </h4>
                  <p className="team-one__member-title">
                    {person.role ? person.role + ', ' : ''}
                    {person.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
