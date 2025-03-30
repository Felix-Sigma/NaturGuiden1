// kontakt.js
document.addEventListener('DOMContentLoaded', function() {
  // FAQ: Visa/dölj svar vid klick
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(function(question) {
    question.addEventListener('click', function() {
      // Hitta förälderelementet (faq-item)
      const faqItem = this.parentElement;
      
      // Växla active-klassen på faq-item istället för att ändra display direkt
      faqItem.classList.toggle('active');
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