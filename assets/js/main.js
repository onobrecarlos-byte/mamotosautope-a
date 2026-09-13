// MA - Soluções Mecânicas Interactive Script
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });
  }

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          if (mobileNav) mobileNav.classList.add('hidden');
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Initialize Swiper Products Carousel - Automatic Smooth Sliding without pagination
  if (typeof Swiper !== 'undefined') {
    new Swiper('.products-swiper', {
      loop: true,
      slidesPerView: 1.8,
      spaceBetween: 24,
      speed: 3500,
      autoplay: {
        delay: 1,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: { slidesPerView: 2.8, spaceBetween: 30 },
        1024: { slidesPerView: 4, spaceBetween: 40 },
      }
    });
  }
});
