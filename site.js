const menuButton = document.querySelector('.menu-toggle');
const menuLinks = document.querySelector('#nav-links');

function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  menuLinks.classList.toggle('is-open', open);
  menuButton.querySelector('.menu-label').textContent = open ? 'Закрыть' : 'Меню';
}

menuButton.addEventListener('click', () => {
  setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
});
menuLinks.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenu(false);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuButton.focus();
  }
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('.nav')) setMenu(false);
});
window.matchMedia('(min-width: 701px)').addEventListener('change', () => setMenu(false));
