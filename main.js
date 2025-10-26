const sections = document.querySelectorAll('.web-section');
const navToggle = document.querySelector('.mobile-nav-toggle');
const bar2 = document.querySelector('.bar-2');

function isInView(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.bottom > 0 &&
    rect.top < (window.innerHeight || document.documentElement.clientHeight)
  );
}

document.addEventListener('scroll', () => {
  sections.forEach((section) => {
    if (isInView(section)) {
      section.classList.add('web-section--visible');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  sections.forEach((section) => {
    if (isInView(section)) {
      section.classList.add('web-section--visible');
    }
  });
});

navToggle.addEventListener('click', () => {
  bar2.hasAttribute('data-visible')
    ? navToggle.setAttribute('aria-expanded', 'false')
    : navToggle.setAttribute('aria-expanded', 'true');
  bar2.toggleAttribute('data-visible');
});
