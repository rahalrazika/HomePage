const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const icon = mobileMenuToggle.querySelector('i');

mobileMenuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
});
