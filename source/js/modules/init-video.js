const button = document.querySelector('.promo__video-button');
const videoHolder = document.querySelector('.promo__video-wrapper');

const initVideo = () => {
  button.addEventListener('click', () => {
    const video = document.createElement('iframe');
    video.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1');
    video.setAttribute('height', '228');
    video.setAttribute('width', '364');
    video.setAttribute('allow', 'autoplay');
    video.setAttribute('frameborder', '0');
    video.classList.add('promo__video-play');

    videoHolder.append(video);
  });

};

export {initVideo};
