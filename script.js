const nav = document.getElementById('main-nav');

window.addEventListener('scroll', function() {
  if (window.scrollY > 100) { // Change the value to adjust scroll threshold
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

const menuItems = nav.querySelectorAll('li a');

menuItems.forEach(menuItem => {
  menuItem.addEventListener('mouseover', function() {
    menuItem.classList.add('hovered');
  });
  menuItem.addEventListener('mouseout', function() {
    menuItem.classList.remove('hovered');
  });
});
