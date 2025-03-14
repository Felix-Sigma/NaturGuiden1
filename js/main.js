// Common JavaScript functions for all pages

// Handle hamburger menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const hamburgerButton = document.querySelector('.hamburger-menu');
  const navList = document.querySelector('.nav-list');
  
  if (hamburgerButton && navList) {
      hamburgerButton.addEventListener('click', function() {
          // Toggle navigation menu
          navList.classList.toggle('show');
          
          // Animate hamburger icon
          const bars = this.querySelectorAll('.bar');
          bars.forEach(bar => bar.classList.toggle('active'));
          
          // Toggle aria-expanded for accessibility
          const expanded = this.getAttribute('aria-expanded') === 'true' || false;
          this.setAttribute('aria-expanded', !expanded);
          
          // Update the aria-label based on the state
          if (!expanded) {
              this.setAttribute('aria-label', 'Stäng menyn');
          } else {
              this.setAttribute('aria-label', 'Öppna menyn');
          }
      });
      
      // Close menu when clicking outside
      document.addEventListener('click', function(event) {
          if (!event.target.closest('.main-nav') && navList.classList.contains('show')) {
              navList.classList.remove('show');
              hamburgerButton.setAttribute('aria-expanded', 'false');
              hamburgerButton.setAttribute('aria-label', 'Öppna menyn');
              
              const bars = hamburgerButton.querySelectorAll('.bar');
              bars.forEach(bar => bar.classList.remove('active'));
          }
      });
  }
});