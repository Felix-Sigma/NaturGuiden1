// index.js
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        if (emailInput.value.trim() !== "") {
          alert('Tack för din prenumeration!');
          newsletterForm.reset();
        } else {
          alert('Var god ange en giltig e-postadress.');
        }
      });
    }
  });
  