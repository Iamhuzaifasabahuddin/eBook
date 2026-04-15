// Sticky nav shadow
const nav = document.getElementById('main-nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('solid', window.scrollY > 20);
}, { passive: true });

// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// FAQ accordion
function toggleFaq(btn) {
  const item = btn.parentElement;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(el => {
    el.classList.remove('open');
    el.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
  });
  if (!isOpen) {
    item.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  }
}

// Keyboard FAQ
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleFaq(btn); }
  });
});

//// Smooth scroll for nav links
//document.querySelectorAll('a[href^="#"]').forEach(a => {
//  a.addEventListener('click', e => {
//    const target = document.querySelector(a.getAttribute('href'));
//    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
//  });
//});


const links = document.querySelectorAll('.animate-link');

links.forEach(link => {
link.addEventListener('click', e => {
  e.preventDefault();
  const target = document.querySelector(link.getAttribute('href'));
  target.scrollIntoView({ behavior: 'smooth' });
  target.style.transition = 'opacity 0.8s ease';
  target.style.opacity = 0;
  setTimeout(() => target.style.opacity = 1, 200);
});
});
