import { useEffect } from "react";
import { register } from "swiper/element/bundle";

const useSwiper = (swiperEl) => {
  const handleNextSlide = () => {
    swiperEl.current.swiper.slideNext();
  };

  const handlePreviousSlide = () => {
    swiperEl.current.swiper.slidePrev();
  };

  useEffect(() => {
    register();
    swiperEl.current.breakpoints = {
      1024: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      500: {
        slidesPerView: 1,
      },
    };
    swiperEl.current.pagination = {
      clickable: true,
    };
  }, []);

  return { handleNextSlide, handlePreviousSlide };
};

export default useSwiper;
