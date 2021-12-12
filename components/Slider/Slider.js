import { useState } from 'react';
import { general } from '../../cms/data';

export const Slider = () => {
  const [swiperClassNameActive, setSwiperClassNameActive] = useState('');

  // add class on timeout to make css transition work
  setTimeout(() => {
    !swiperClassNameActive && setSwiperClassNameActive('swiper-slide-active');
  }, 0);

  return (
    <section className="main-slider">
      <div className="swiper-container thm-swiper__slider">
        <div className="swiper-wrapper">
          <div className={`swiper-slide ${swiperClassNameActive}`}>
            <div className="image-layer" />
            <div className="image-layer-overlay" />
            <div className="main-slider-shape-1" />
            <div className="main-slider-shape-2" />
            <div className="main-slider-shape-3" />
            <div className="main-slider-shape-4" />
            {/* /.image-layer */}
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="main-slider__content">
                    <p>welcome to CoderPlace</p>
                    <h2>
                      we create <br /> web software
                    </h2>
                    <a
                      target="_blank"
                      href={general.calendlyUrl}
                      className="thm-btn"
                    >
                      <span>Free consultation</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
