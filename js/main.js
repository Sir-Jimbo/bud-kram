new PerformanceObserver((list) => {
   const latestEntry = list.getEntries().at(-1);

   if (latestEntry?.element?.getAttribute('loading') == 'lazy') {
      console.warn('Warning: LCP element was lazy loaded', latestEntry);
   }
}).observe({ type: 'largest-contentful-paint', buffered: true });

const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const body = document.querySelector('body');
if (headerBurger) {
   headerBurger.addEventListener('click', () => {
      headerBurger.classList.toggle('active');
      headerMenu.classList.toggle('active');
      body.classList.toggle('lock');
   });
}

