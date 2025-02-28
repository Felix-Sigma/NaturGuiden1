// utrustning.js
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
  
    tabButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        // Ta bort 'active' från alla knappar och innehåll
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
  
        // Lägg till 'active' på klickad knapp och motsvarande innehåll
        button.classList.add('active');
        const tabId = button.getAttribute('data-tab');
        const contentToShow = document.getElementById(tabId);
        if (contentToShow) {
          contentToShow.classList.add('active');
        }
      });
    });
  });
  