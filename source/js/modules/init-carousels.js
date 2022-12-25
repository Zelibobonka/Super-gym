import Swiper, {Navigation, A11y} from 'swiper';

export const initCarousels = () => {
  const responses = new Swiper('.responses__swiper', {
    direction: 'horizontal',
    spaceBetween: 405,
    grabCursor: true,
    modules: [Navigation, A11y],
    navigation: {
      nextEl: '.responses__button-next',
      prevEl: '.responses__button-prev',
    },
  });

  const instructors = new Swiper('.instructors__swiper', {
    direction: 'horizontal',
    updateOnWindowResize: true,
    spaceBetween: 300,
    grabCursor: true,
    modules: [Navigation, A11y],
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        initialSlide: 2,
      },
      580: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
        initialSlide: 2,
      },
      1070: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
        initialSlide: 2,
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 40,
      },
    },
    navigation: {
      nextEl: '.instructors__button-next',
      prevEl: '.instructors__button-prev',
    },
  });

  const deleteTabindex = () => {
    const slideDuplicate = document.querySelectorAll('.swiper-slide-duplicate');

    slideDuplicate.forEach((el) => {
      el.removeAttribute('tabindex');
    });
  };

  deleteTabindex();

  return [responses, instructors];
};
