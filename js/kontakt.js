// kontakt.js
document.addEventListener('DOMContentLoaded', function() {
    // FAQ: Visa/dölj svar vid klick
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(function(question) {
      question.addEventListener('click', function() {
        const answer = question.nextElementSibling;
        if (answer) {
          // Växla visning
          answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        }
      });
    });
  
    // Kontaktformulär: Enkel submission-hantering
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Här kan du lägga in AJAX-anrop eller annan logik vid behov
        alert('Ditt meddelande har skickats. Vi återkommer så snart som möjligt.');
        contactForm.reset();
      });
    }
  });
  