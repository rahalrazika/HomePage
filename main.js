const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const icon = mobileMenuToggle.querySelector('i');

mobileMenuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
});

function toggleAnswer(answerId) {
  const answer = document.getElementById(answerId);
  const arrow = document.getElementById(`arrow${answerId.slice(-1)}`);
  if (answer.style.display === 'block') {
    answer.style.display = 'none';
    arrow.classList.remove('rotate-180');
  } else {
    answer.style.display = 'block';
    arrow.classList.add('rotate-180');
  }
}
