document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburguer');
  const nav = document.querySelector('.navHeader');

  hamburger.addEventListener('click', function () {
      nav.classList.toggle('active');
  });
});
