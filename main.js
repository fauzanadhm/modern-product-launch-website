const sections = document.querySelectorAll('.web-section');
const navToggle = document.querySelector('.mobile-nav-toggle');
const bar2 = document.querySelector('.bar-2');
const ours = document.querySelector("#ours");
const tableHighlight = document.querySelector(".table-highlight");
const navs = document.querySelectorAll(
  'a[href="#benefits"], a[href="#specs"], a[href="#how-to"], a[href="#contact-us"]',
);

function isInView(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.bottom > 0 &&
    rect.top < (window.innerHeight || document.documentElement.clientHeight)
  );
}

const toggleNavigationVisibility = () => {
  bar2.hasAttribute('data-visible')
    ? navToggle.setAttribute('aria-expanded', 'false')
    : navToggle.setAttribute('aria-expanded', 'true');
  bar2.toggleAttribute('data-visible');
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

navToggle.addEventListener('click', toggleNavigationVisibility);

navs.forEach((nav) => {
  nav.addEventListener('click', toggleNavigationVisibility);
})
