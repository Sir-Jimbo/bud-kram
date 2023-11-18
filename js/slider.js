const swiperPortfolio = new Swiper('.portfolio__swiper', {
   slidesPerView: 1,
   loop: true,
   speed: 1200,
   centeredSlides: true,
   lazy: true,

   keyboard: {
      enabled: true,
   },
   breakpoints: {
      0: { /* when window >=0px - webflow mobile portriat */
         slidesPerView: 1,
      },
      478: { /* when window >= 478px - webflow mobile landscape */
         slidesPerView: 1.5,
         spaceBetween: 30,
      },
      768: { /* when window >= 768px - webflow mobile landscape */
         slidesPerView: 2,
         spaceBetween: 30,
      },
      1024: { /* when window >= 1024px - webflow mobile landscape */
         slidesPerView: 3,
         spaceBetween: 30,
      },
   },
   autoplay: {
      delay: 3000,
   },
});

const swiperNews = new Swiper('.news__swiper', {
   slidesPerView: 1,
   loop: true,
   speed: 1200,
   lazy: true,

   keyboard: {
      enabled: true,
   },
   breakpoints: {
      0: { /* when window >=0px - webflow mobile portriat */
         slidesPerView: 1,
      },
      478: { /* when window >= 478px - webflow mobile landscape */
         slidesPerView: 2,
         spaceBetween: 30,
      },
      1024: { /* when window >= 1024px - webflow mobile landscape */
         slidesPerView: 4,
         spaceBetween: 30,
      },
   },
   navigation: {
      nextEl: '.news__swiper--next',
      prevEl: '.news__swiper--prev',
   },
});