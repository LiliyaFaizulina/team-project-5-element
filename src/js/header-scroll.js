
window.onscroll = () => changeHeaderBackground();

function changeHeaderBackground() {
  const header = document.getElementById("header");
  const headerOffsetTrigger = header.offsetTop;
  const pageOffset = window.pageYOffset;

  if (pageOffset > headerOffsetTrigger) {
    header.classList.add("header--no-transparency");
  } else {
    header.classList.remove("header--no-transparency");
  }
}

