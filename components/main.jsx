import { Header } from './Header/Header';
import { Slider } from './Slider/Slider';
import { Services } from './Services/Services';
import { Team } from './Team/Team';
import { Video } from './Video/Video';
import { Portfolio } from './Portfolio/Portfolio';
import { BlogPromo } from './BlogPromo/BlogPromo';
import { Reasons } from './Reasons/Reasons';
import { TechStack } from './TechStack/TechStack';
import { GetInTouch } from './GetInTouch/GetInTouch';
import { PreFooter } from './PreFooter/PreFooter';
import { Footer } from './Footer/Footer';
import { MobileMenu } from './MobileMenu/MobileMenu';

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
        <TechStack />
        <Team />
        <Video />
        <Portfolio />
        <Reasons />
        {/*<BlogPromo />*/}
        <GetInTouch />
        <PreFooter />
        <Footer />
      </div>
    </div>
  );
};
