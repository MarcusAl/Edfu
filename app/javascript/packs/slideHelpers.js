export const slideHelpers = () => {
  document.addEventListener('turbolinks:load', () => {
    const slider = tns({
      container: '.slider_cont',
      items: 2,
      gutter: 10,
      controls: false,
      nav: false,
      navPosition: 'bottom',
      navAsThumbnails: true,
      slideBy: 'page',
      mouseDrag: true,
      swipeAngle: false,
      speed: 400,
      edgePadding: 20,
      preventScrollOnTouch: 'force',
      responsive: {
        350: {
          items: 1,
        },
        500: {
          items: 2,
        },
      },
    });
    const slider2 = tns({
      container: '.slider_cont_2',
      items: 2,
      gutter: 10,
      controls: false,
      nav: false,
      navPosition: 'bottom',
      navAsThumbnails: true,
      slideBy: 'page',
      mouseDrag: true,
      swipeAngle: false,
      speed: 400,
      edgePadding: 20,
      preventScrollOnTouch: 'force',
      responsive: {
        350: {
          items: 1,
        },
        500: {
          items: 2,
        },
      },
    });
    const slider3 = tns({
      container: '.slider_cont_3',
      items: 2,
      gutter: 10,
      controls: false,
      nav: false,
      navPosition: 'bottom',
      navAsThumbnails: true,
      slideBy: 'page',
      mouseDrag: true,
      swipeAngle: false,
      speed: 400,
      edgePadding: 20,
      preventScrollOnTouch: 'force',
      responsive: {
        350: {
          items: 1,
        },
        500: {
          items: 2,
        },
      },
    });
  });
};
