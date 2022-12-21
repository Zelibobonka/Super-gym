import './vendor/swiper';
import './vendor/focus-visible-polyfill';

/* eslint-disable*/
const swiper = new Swiper('.instructors__swiper', {
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
      slidesPerGroup: 3 ,
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
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const deleteTabindex = () => {
  const slideDuplicate = document.querySelectorAll('.swiper-slide-duplicate');

  slideDuplicate.forEach((el) => {
    el.removeAttribute('tabindex');
  });
};

deleteTabindex();

const slider = new Swiper('.responses__swiper', {
  navigation: {
    nextEl: '.responses__button-next',
    prevEl: '.responses__button-prev',
  },
});
