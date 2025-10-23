const sections = document.querySelectorAll('.web-section');

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
