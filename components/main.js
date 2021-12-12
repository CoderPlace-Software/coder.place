import { Header } from './Header/Header';
import { Slider } from './Slider/Slider';

export const Main = () => {
  return (
    <div>
      <div className="page-wrapper">
        <Header />
        <div className="stricky-header stricked-menu main-menu">
          <div className="sticky-header__content" />
          {/* /.sticky-header__content */}
        </div>
        {/* /.stricky-header */}
        {/* Banner One Start */}
        <Slider />

        {/* /.mobile-nav__content */}
      </div>
      {/* /.mobile-nav__wrapper */}
      <div className="search-popup">
        <div className="search-popup__overlay search-toggler" />
        {/* /.search-popup__overlay */}
        <div className="search-popup__content">
          <form action="#">
            <label htmlFor="search" className="sr-only">
              search here
            </label>
            {/* /.sr-only */}
            <input type="text" id="search" placeholder="Search Here..." />
            <button
              type="submit"
              aria-label="search submit"
              className="thm-btn"
            >
              <i className="icon-magnifying-glass" />
            </button>
          </form>
        </div>
        {/* /.search-popup__content */}
      </div>
      {/* /.search-popup */}
    </div>
  );
};
