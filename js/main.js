document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('.splide', {
    type: 'loop',
    pagination: false,
    rewind: true,
    arrows: true,
    gap: '32px',
    perPage: 2.5,
    focus: 1,
    trimSpace: false,
    breakpoints: {
      768: {
        arrows: false,
        gap: '1.2rem',
        perPage: 2.5,
        focus: 1,

      }

    }
  });

  splide.mount();



});