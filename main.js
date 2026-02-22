// ===========================
// TATTVASIM — main.js
// ===========================

// Navbar scroll effect
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  });
  // Close on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });
}

// Intersection Observer for scroll animations
const animatedEls = document.querySelectorAll('.animate-fade-up');
if (animatedEls.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  animatedEls.forEach(el => {
    // Pause animation until visible
    if (!el.classList.contains('hero-badge') &&
        !el.classList.contains('hero-title') &&
        !el.classList.contains('hero-subtitle') &&
        !el.classList.contains('hero-actions') &&
        !el.classList.contains('hero-scroll')) {
      el.style.animationPlayState = 'paused';
      observer.observe(el);
    }
  });
}

// Smooth hover lift for cards
document.querySelectorAll('.service-card, .case-card, .team-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.willChange = 'transform, box-shadow';
  });
  card.addEventListener('mouseleave', () => {
    card.style.willChange = '';
  });
});
