// Change header style on scroll
window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Toggle mobile navigation menu
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');
  
  menuToggle.addEventListener('click', function () {
    nav.classList.toggle('active');
  });
  