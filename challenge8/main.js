hamburger = document.getElementById('hamburger');
nav = document.getElementById('nav')

hamburger.onclick = () => {
  nav.classList.toggle('nav--visible');
}