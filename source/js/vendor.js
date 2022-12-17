import './vendor/swiper';
import './vendor/focus-visible-polyfill';

/* eslint-disable*/
const swiper = new Swiper('.instructors__swiper', {
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    580: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    },
    1070: {
      slidesPerView: 3,
      slidesPerGroup: 3 ,
      spaceBetween: 30,
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
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
