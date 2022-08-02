(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const bodyRef = document.querySelector('#page');
  const links = document.querySelectorAll('[data-nav]');
  const desktopWindowSize = window.matchMedia('(min-width: 1366px)').matches;

  menuBtnRef.addEventListener('click', toggleMobileMenu);

  if (desktopWindowSize) {
    return;
  } else {
    links.forEach(link => link.addEventListener('click', toggleMobileMenu));
  }

  function toggleMobileMenu() {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    bodyRef.classList.toggle('no-scroll');
  }
})();
