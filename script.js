const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.site-nav');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(pointer: fine)');
const coarsePointer = window.matchMedia('(pointer: coarse)');

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  menu?.classList.toggle('is-open', !open);
});

menu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
  });
});

const shoes = [...document.querySelectorAll('.shoe-link')];

shoes.forEach((shoe) => {
  const image = shoe.querySelector('img');

  shoe.addEventListener('pointermove', (event) => {
    if (reduceMotion.matches || !finePointer.matches || !image) return;
    const rect = shoe.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    image.style.transform = `translateY(-20px) scale(1.045) rotateX(${y * -7}deg) rotateY(${x * 10}deg)`;
  });

  shoe.addEventListener('pointerleave', () => {
    image?.style.removeProperty('transform');
    shoe.classList.remove('tap-active');
  });

  shoe.addEventListener('click', (event) => {
    if (!coarsePointer.matches || shoe.classList.contains('tap-active')) return;
    event.preventDefault();
    shoes.forEach((item) => item.classList.remove('tap-active'));
    shoe.classList.add('tap-active');
  });
});

document.addEventListener('pointerdown', (event) => {
  if (!event.target.closest('.shoe-link')) shoes.forEach((shoe) => shoe.classList.remove('tap-active'));
});

const wordFlowElements = [...document.querySelectorAll('.word-flow')];
const flowWords = [];

wordFlowElements.forEach((element) => {
  const words = element.textContent.trim().split(/\s+/);
  element.textContent = '';
  words.forEach((word, index) => {
    const span = document.createElement('span');
    span.className = 'flow-word';
    span.textContent = word;
    element.append(span);
    flowWords.push(span);
    if (index < words.length - 1) element.append(document.createTextNode(' '));
  });
});

const intro = document.querySelector('.intro-frame');
const hero = document.querySelector('.hero-frame');
const heroSticky = document.querySelector('.hero-sticky');
const shoeWraps = shoes.map((shoe) => shoe.querySelector('.shoe-image-wrap'));
let scrollTicking = false;

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function updateWordFlow() {
  scrollTicking = false;
  if (hero && heroSticky) {
    const heroRect = hero.getBoundingClientRect();
    const heroTravel = Math.max(hero.offsetHeight - window.innerHeight, 1);
    const heroProgress = reduceMotion.matches || window.innerWidth <= 940 ? 0 : clamp(-heroRect.top / heroTravel);
    heroSticky.style.setProperty('--hero-progress', heroProgress.toFixed(3));

    const rackRelease = clamp((heroProgress - 0.08) / 0.92);
    const easedRelease = Math.pow(rackRelease, 1.32);
    const directions = [-128, -112, 112, 128];
    const rotations = [-5, -2.5, 2.5, 5];
    shoeWraps.forEach((wrap, index) => {
      if (!wrap) return;
      wrap.style.transform = easedRelease > 0
        ? `translateX(${directions[index] * easedRelease}vw) translateY(${-8 * easedRelease}px) rotate(${rotations[index] * easedRelease}deg)`
        : 'none';
    });
  }

  if (!intro || !flowWords.length) return;
  const rect = intro.getBoundingClientRect();
  const travel = Math.max(intro.offsetHeight - window.innerHeight, 1);
  const progress = reduceMotion.matches ? 1 : clamp(-rect.top / travel);
  const total = Math.max(flowWords.length - 1, 1);

  flowWords.forEach((word, index) => {
    const local = clamp((progress * 1.2 - index / total) / 0.12);
    const red = Math.round(102 + (242 - 102) * local);
    const green = Math.round(99 + (238 - 99) * local);
    const blue = Math.round(94 + (231 - 94) * local);
    word.style.color = `rgb(${red}, ${green}, ${blue})`;
    word.style.opacity = String(0.32 + local * 0.68);
  });
}

function requestWordFlowUpdate() {
  if (scrollTicking) return;
  scrollTicking = true;
  requestAnimationFrame(updateWordFlow);
}

window.addEventListener('scroll', requestWordFlowUpdate, { passive: true });
window.addEventListener('resize', requestWordFlowUpdate);
updateWordFlow();

const carousel = document.querySelector('.project-carousel');
const previousButton = document.querySelector('.carousel-button.previous');
const nextButton = document.querySelector('.carousel-button.next');
const carouselStatus = document.querySelector('.carousel-status');
const tiles = [...document.querySelectorAll('.project-tile')];

function carouselStep() {
  if (!carousel || !tiles.length) return 0;
  const gap = Number.parseFloat(getComputedStyle(carousel).columnGap) || 0;
  return tiles[0].getBoundingClientRect().width + gap;
}

function updateCarouselStatus() {
  if (!carousel || !tiles.length) return;
  const step = carouselStep();
  const index = step ? Math.round(carousel.scrollLeft / step) : 0;
  const current = Math.min(tiles.length, Math.max(1, index + 1));
  if (carouselStatus) carouselStatus.textContent = `${String(current).padStart(2, '0')} — ${String(tiles.length).padStart(2, '0')}`;
  if (previousButton) previousButton.disabled = carousel.scrollLeft < 4;
  if (nextButton) nextButton.disabled = carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth - 4;
}

function moveCarousel(direction) {
  carousel?.scrollBy({ left: carouselStep() * direction, behavior: reduceMotion.matches ? 'auto' : 'smooth' });
}

previousButton?.addEventListener('click', () => moveCarousel(-1));
nextButton?.addEventListener('click', () => moveCarousel(1));
carousel?.addEventListener('scroll', updateCarouselStatus, { passive: true });
carousel?.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    event.preventDefault();
    moveCarousel(1);
  }
  if (event.key === 'ArrowLeft') {
    event.preventDefault();
    moveCarousel(-1);
  }
});
window.addEventListener('resize', updateCarouselStatus);
updateCarouselStatus();
