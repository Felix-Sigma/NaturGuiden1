// JavaScript specifically for the index/home page

document.addEventListener('DOMContentLoaded', function() {
  // Handle newsletter form submission
  const newsletterForm = document.querySelector('.newsletter-form');
  
  if (newsletterForm) {
      newsletterForm.addEventListener('submit', function(event) {
          event.preventDefault();
          
          const emailInput = this.querySelector('input[type="email"]');
          const email = emailInput.value.trim();
          
          if (validateEmail(email)) {
              // In a real application, you would send this to your server
              // For now, we'll just simulate a successful submission
              showThankYouMessage(emailInput);
          } else {
              showErrorMessage(emailInput);
          }
      });
  }
  
  // Add animations for hero section
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
      // Add a class to trigger animations after the page has loaded
      setTimeout(() => {
          heroContent.classList.add('animated');
      }, 300);
  }
  
  // Add hover effects for featured cards
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
          this.querySelector('img').style.transform = 'scale(1.05)';
      });
      
      card.addEventListener('mouseleave', function() {
          this.querySelector('img').style.transform = 'scale(1)';
      });
  });
  
  // Set up seasonal tips highlighting based on current season
  highlightCurrentSeason();
});

// Helper functions

/**
* Validates an email address format
*/
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

/**
* Shows a thank you message after newsletter subscription
*/
function showThankYouMessage(emailInput) {
  const form = emailInput.closest('form');
  const originalContent = form.innerHTML;
  
  form.innerHTML = '<p class="success-message">Tack för din prenumeration! Vi har skickat ett bekräftelsemail.</p>';
  
  // Reset form after 5 seconds
  setTimeout(() => {
      form.innerHTML = originalContent;
      setupFormListeners();
  }, 5000);
}

/**
* Shows an error message for invalid email
*/
function showErrorMessage(emailInput) {
  // Remove any existing error message
  const existingError = emailInput.parentNode.querySelector('.error-message');
  if (existingError) {
      existingError.remove();
  }
  
  // Create and add error message
  const errorMessage = document.createElement('p');
  errorMessage.classList.add('error-message');
  errorMessage.style.color = '#ff3333';
  errorMessage.style.fontSize = '0.9rem';
  errorMessage.style.marginTop = '0.5rem';
  errorMessage.textContent = 'Vänligen ange en giltig e-postadress.';
  
  emailInput.style.borderColor = '#ff3333';
  emailInput.parentNode.appendChild(errorMessage);
  
  // Remove error styling when input changes
  emailInput.addEventListener('input', function() {
      this.style.borderColor = '';
      const error = this.parentNode.querySelector('.error-message');
      if (error) {
          error.remove();
      }
  });
}

/**
* Re-attaches event listeners after form reset
*/
function setupFormListeners() {
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
      newsletterForm.addEventListener('submit', function(event) {
          event.preventDefault();
          
          const emailInput = this.querySelector('input[type="email"]');
          const email = emailInput.value.trim();
          
          if (validateEmail(email)) {
              showThankYouMessage(emailInput);
          } else {
              showErrorMessage(emailInput);
          }
      });
  }
}

/**
* Highlights only the current season's tip box based on the current date
*/
function highlightCurrentSeason() {
  // Get current month (0-based, 0 = January)
  const currentMonth = new Date().getMonth();
  
  // Map month to season
  let currentSeason;
  if (currentMonth >= 2 && currentMonth <= 4) {
      currentSeason = "Vår"; // Spring (March-May)
  } else if (currentMonth >= 5 && currentMonth <= 7) {
      currentSeason = "Sommar"; // Summer (June-August)
  } else if (currentMonth >= 8 && currentMonth <= 10) {
      currentSeason = "Höst"; // Fall (September-November)
  } else {
      currentSeason = "Vinter"; // Winter (December-February)
  }
  
  // Get all season tip elements
  const tips = document.querySelectorAll('.tip');
  
  // Find and highlight only the current season
  tips.forEach(tip => {
      const seasonHeading = tip.querySelector('h3');
      if (seasonHeading && seasonHeading.textContent === currentSeason) {
          // Apply highlighting to current season only
          tip.style.borderLeft = '4px solid #2e6e41';
          tip.style.backgroundColor = '#f2f8f4';
          tip.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.15)';
          
          // Add a "Current" label
          const currentLabel = document.createElement('span');
          currentLabel.textContent = 'Aktuell';
          currentLabel.style.position = 'absolute';
          currentLabel.style.top = '10px';
          currentLabel.style.right = '10px';
          currentLabel.style.backgroundColor = '#2e6e41';
          currentLabel.style.color = 'white';
          currentLabel.style.padding = '2px 8px';
          currentLabel.style.borderRadius = '4px';
          currentLabel.style.fontSize = '0.8rem';
          
          // Make sure the tip has position relative for absolute positioning of the label
          tip.style.position = 'relative';
          tip.appendChild(currentLabel);
      } else {
          // Make sure other seasons don't have the highlight styling
          tip.style.borderLeft = '';
          tip.style.backgroundColor = '';
          tip.style.boxShadow = '';
          
          // Remove any existing "Current" labels from other seasons
          const existingLabel = tip.querySelector('span');
          if (existingLabel && existingLabel.textContent === 'Aktuell') {
              existingLabel.remove();
          }
      }
  });
}