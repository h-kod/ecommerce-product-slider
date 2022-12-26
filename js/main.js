  document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
      type   : 'loop',
      pagination: false,
      rewind: false,
      waitForTransition: false,
      flickMaxPages: 0.5,
      arrows: false,
      gap: '32px',
      fixedWidth: '40%',
      breakpoints: {

        1440: {
          arrows: false,
          gap: '1.2rem',
          fixedWidth: '39%',
        }

      }
    } );

    splide.mount();



  } );