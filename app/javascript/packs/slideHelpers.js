import { bottom } from '@popperjs/core';

export const slideHelpers = () => {
  document.addEventListener('turbolinks:load', () => {
    const slider = tns({
      container: '.slider_cont',
      items: 1,
      gutter: 10,
      controls: true,
      controlsPosition: 'top',
      controlsText: ['<', '>'],
      nav: false,
      navAsThumbnails: true,
      slideBy: 'page',
      mouseDrag: true,
      swipeAngle: false,
      speed: 400,
      edgePadding: 10,
      preventScrollOnTouch: 'force',
      responsive: {
        350: {
          items: 1,
          edgePadding: 20,
        },
        500: {
          items: 2,
          edgePadding: 20,
        },
      },
    });
    const slider2 = tns({
      container: '.slider_cont_2',
      items: 1,
      gutter: 10,
      controls: true,
      controlsPosition: 'top',
      controlsText: ['<', '>'],
      nav: false,
      navAsThumbnails: true,
      slideBy: 'page',
      mouseDrag: true,
      swipeAngle: false,
      speed: 400,
      edgePadding: 10,
      preventScrollOnTouch: 'force',
      responsive: {
        350: {
          items: 1,
          edgePadding: 20,
        },
        500: {
          items: 2,
          edgePadding: 20,
        },
      },
    });
    const slider3 = tns({
      container: '.slider_cont_3',
      items: 1,
      gutter: 10,
      controls: true,
      controlsPosition: 'top',
      controlsText: ['<', '>'],
      nav: false,
      navAsThumbnails: true,
      slideBy: 'page',
      mouseDrag: true,
      swipeAngle: false,
      speed: 400,
      edgePadding: 10,
      preventScrollOnTouch: 'force',
      responsive: {
        350: {
          items: 1,
          edgePadding: 20,
        },
        500: {
          items: 2,
          edgePadding: 20,
        },
      },
    });
  });
};
