import { useRef } from 'react';
/* import { useSelector } from 'react-redux'; */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, /* Pagination */ } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper.min.css';
import styles from './slider.module.css';
import { ReactComponent  as SliderBtnNext } from '../../images/Arrow-right.svg';
import { ReactComponent  as SliderBtnPrev } from '../../images/Arrow-left.svg';
import Card from '../Card/Card';
import NavigationTabs from '../NavigationTabs/NavigationTabs';

const Slider = ({ slides, currentTab }) => {

  /* const slides = useSelector(store => store.cardReducer.slides);
  const currentTab = useSelector(store => store.cardReducer.currentTab); */

  const navPrevButton = useRef(null);
  const navNextButton = useRef(null);

  const onBeforeInit = (Swiper) => {
    if (typeof Swiper.params.navigation !== 'boolean') {
      const navigation = Swiper.params.navigation;
      navigation.prevEl = navPrevButton.current;
      navigation.nextEl = navNextButton.current;
    }
    /* if (typeof Swiper.params.pagination !== 'boolean') {
      Swiper.params.pagination.el = paginationLabel.current;
    } */
  };

  return (
    <>
      {/* <NavigationTabs slides={slides} type={currentTab} /> */}
      <div className={styles.slider__container}>
        <button className={styles.slider__btnPrev} ref={navPrevButton}><SliderBtnPrev /></button>
        <Swiper
          onBeforeInit={onBeforeInit}
          modules={[/* Pagination, */ Navigation]}
          slidesPerView={4}
          spaceBetween={58}
          /* breakpoints={breakePointsSettings} */
          width='1284'
          className={styles.slider}
        >
          {slides.map(slide => {
          return (
            <SwiperSlide key={slide.id} className={styles.slider__slide}>
              <Card 
                name={slide.name}
                starValue={slide.starValue}
                reviews={slide.reviews}
                price={slide.price}
                about={slide.about}
              />
            </SwiperSlide>
          )
          })}
        </Swiper>
        <button className={styles.slider__btnNext} ref={navNextButton}><SliderBtnNext /></button>
      </div>
    </>
  );
};

export default Slider;
