import { Header } from './Header/Header';
import { Slider } from './Slider/Slider';
import { Services } from './Services/Services';
import { Team } from './Team/Team';
import { Video } from './Video/Video';
import { Portfolio } from './Portfolio/Portfolio';
import { BlogPromo } from './BlogPromo/BlogPromo';

export const Main = () => {
  return (
    <div>
      <div className="page-wrapper">
        <Header />
        <div className="stricky-header stricked-menu main-menu">
          <div className="sticky-header__content" />
        </div>
        <Slider />
        <Services />
        <Team />
        <Video />
        <Portfolio />
        <BlogPromo />
      </div>
    </div>
  );
};
