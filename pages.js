const body = document.body;
const menuButton = document.querySelector('.page-menu');
const menu = document.querySelector('.page-nav');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

requestAnimationFrame(() => body.classList.add('is-ready'));

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

document.querySelectorAll('a[href]').forEach((link) => {
  link.addEventListener('click', (event) => {
    if (reducedMotion.matches || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const url = new URL(link.href, window.location.href);
    if (url.origin !== window.location.origin || url.hash || link.target === '_blank') return;
    event.preventDefault();
    body.classList.add('is-leaving');
    window.setTimeout(() => { window.location.href = url.href; }, 190);
  });
});

const reveals = document.querySelectorAll('.reveal');
if (reducedMotion.matches || !('IntersectionObserver' in window)) {
  reveals.forEach((item) => item.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: .14 });
  reveals.forEach((item) => observer.observe(item));
}

const progress = document.querySelector('.case-progress');
function updateProgress() {
  if (!progress) return;
  const travel = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
  const value = Math.min(100, Math.max(0, window.scrollY / travel * 100));
  progress.style.setProperty('--reading-progress', `${value}%`);
}
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

const caseCarousel = document.querySelector('[data-case-carousel]');
const caseCards = caseCarousel ? Array.from(caseCarousel.querySelectorAll('.case-card')) : [];
const casePrevious = document.querySelector('.case-previous');
const caseNextButton = document.querySelector('.case-next-button');
const caseStatus = document.querySelector('.case-carousel-status');

if (caseCarousel && caseCards.length) {
  let activeCase = 0;
  let caseScrollFrame = 0;

  const updateCaseStatus = () => {
    const left = caseCarousel.scrollLeft;
    activeCase = caseCards.reduce((closest, card, index) => {
      const currentDistance = Math.abs(card.offsetLeft - caseCarousel.offsetLeft - left);
      const closestDistance = Math.abs(caseCards[closest].offsetLeft - caseCarousel.offsetLeft - left);
      return currentDistance < closestDistance ? index : closest;
    }, 0);
    if (caseStatus) {
      caseStatus.textContent = `${String(activeCase + 1).padStart(2, '0')} — ${String(caseCards.length).padStart(2, '0')}`;
    }
  };

  const moveToCase = (index) => {
    const nextIndex = Math.max(0, Math.min(caseCards.length - 1, index));
    caseCarousel.scrollTo({
      left: caseCards[nextIndex].offsetLeft - caseCarousel.offsetLeft,
      behavior: reducedMotion.matches ? 'auto' : 'smooth'
    });
  };

  casePrevious?.addEventListener('click', () => moveToCase(activeCase - 1));
  caseNextButton?.addEventListener('click', () => moveToCase(activeCase + 1));
  caseCarousel.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    moveToCase(activeCase + (event.key === 'ArrowRight' ? 1 : -1));
  });
  caseCarousel.addEventListener('scroll', () => {
    cancelAnimationFrame(caseScrollFrame);
    caseScrollFrame = requestAnimationFrame(updateCaseStatus);
  }, { passive: true });

  const hashCard = window.location.hash ? document.querySelector(window.location.hash) : null;
  if (hashCard?.classList.contains('case-card')) {
    const hashIndex = caseCards.indexOf(hashCard);
    requestAnimationFrame(() => moveToCase(hashIndex));
  }
  updateCaseStatus();
}
