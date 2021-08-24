const starList = document.getElementById('star-list');
const stars = document.querySelectorAll('.star');

/*
  -When star is hovered over highlight star
    and all stars before it
  -When star is clicked, keep star color and
    apply same color to all stars before it
*/

stars.forEach(star => {
  star.addEventListener('click', () => {
    let starLevel = star.id
    stars.forEach(el => {
      if (el.id <= starLevel) {
        el.classList.add('color')
      } else {
        el.classList.remove('color')
      }
    })
  })
})