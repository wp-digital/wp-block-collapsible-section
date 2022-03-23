export default () => {
  const accordionHeadings = document.querySelectorAll('.block-collapsible-section__heading');

  accordionHeadings.forEach((heading) => {
    heading.addEventListener('click', (e) => {
      e.currentTarget.closest('.wp-block-innocode-collapsible-section').classList.toggle('is-opened');
    });
  });
};
