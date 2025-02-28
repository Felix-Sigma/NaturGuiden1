// main.js
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navList = document.querySelector('.nav-list');
  
    if (hamburger && navList) {
      hamburger.addEventListener('click', function() {
        // Toggle en klass för att visa/dölja navigationsmenyn
        navList.classList.toggle('active');
      });
    }
  });
  