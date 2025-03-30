// Vänta tills DOM är helt laddad innan scripts körs
document.addEventListener('DOMContentLoaded', function() {
    // Hantera filtrering av vandringsleder
    const filterButton = document.querySelector('.filter-button');
    const trailCards = document.querySelectorAll('.trail-card');
    
    if (filterButton) {
        filterButton.addEventListener('click', function() {
            const regionFilter = document.getElementById('region').value;
            const difficultyFilter = document.getElementById('difficulty').value;
            const lengthFilter = document.getElementById('length').value;
            
            trailCards.forEach(card => {
                const region = card.querySelector('.region').textContent.toLowerCase();
                const difficulty = card.querySelector('.difficulty').textContent.toLowerCase();
                const length = card.querySelector('.length').textContent;
                
                let showCard = true;
                
                // Regionfiltrering
                if (regionFilter !== 'all') {
                    if (!region.includes(regionFilter.toLowerCase())) {
                        showCard = false;
                    }
                }
                
                // Svårighetsfiltrering
                if (difficultyFilter !== 'all') {
                    if (!difficulty.includes(difficultyFilter.toLowerCase())) {
                        showCard = false;
                    }
                }
                
                // Längdfiltrering
                if (lengthFilter !== 'all') {
                    const kmValue = parseFloat(length);
                    
                    if (lengthFilter === 'short' && kmValue >= 5) showCard = false;
                    if (lengthFilter === 'medium' && (kmValue < 5 || kmValue > 15)) showCard = false;
                    if (lengthFilter === 'long' && kmValue <= 15) showCard = false;
                }
                
                // Visa eller dölj kortet
                if (showCard) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Kontrollera om någon kategori är helt tom och dölj den i så fall
            const categories = document.querySelectorAll('.trail-category');
            categories.forEach(category => {
                const visibleCards = category.querySelectorAll('.trail-card[style="display: flex"]');
                if (visibleCards.length === 0) {
                    category.style.display = 'none';
                } else {
                    category.style.display = 'block';
                }
            });
        });
    }
    
    // Hantera kartvyn för leder
    const showMapButtons = document.querySelectorAll('.show-trail-map');
    const mapModal = document.querySelector('.map-modal');
    const closeMapBtn = document.querySelector('.close-map-btn');
    const mapTitle = document.querySelector('.map-title');
    const trailMap = document.querySelector('.trail-map');
    
    if (showMapButtons.length && mapModal) {
        showMapButtons.forEach(button => {
            button.addEventListener('click', function() {
                const trailId = this.getAttribute('data-trail');
                const trailName = this.closest('.trail-card').querySelector('h3').textContent;
                
                // Ställ in karttitel
                mapTitle.textContent = trailName + ' - Karta';
                
                // Ladda kartan för den specifika leden
                loadTrailMap(trailId);
                
                // Visa modalfönstret
                mapModal.style.display = 'flex';
                document.body.style.overflow = 'hidden'; // Förhindra scrollning av bakgrund
            });
        });
        
        // Stäng kartan när man klickar på stängknappen
        if (closeMapBtn) {
            closeMapBtn.addEventListener('click', function() {
                mapModal.style.display = 'none';
                document.body.style.overflow = 'auto'; // Återaktivera scrollning
            });
        }
        
        // Stäng kartan när man klickar utanför kartinnehållet
        mapModal.addEventListener('click', function(event) {
            if (event.target === mapModal) {
                mapModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Funktion för att ladda karta för specifik led
    function loadTrailMap(trailId) {
        // Här kan du lägga till kod för att ladda kartor från en API eller lokal databas
        // För nu använder vi en enkel platshållare
        
        const mapPlaceholders = {
            'kungsleden': '<img src="../images/map-kungsleden.jpg" alt="Karta över Kungsleden">',
            'hoga-kusten': '<img src="../images/map-hogakusten.jpg" alt="Karta över Höga Kusten leden">',
            'sormlandsleden': '<img src="../images/map-sormlandsleden.jpg" alt="Karta över Sörmlandsleden">',
            'jamtlandstriangeln': '<img src="../images/map-jamtlandstriangeln.jpg" alt="Karta över Jämtlandstriangeln">',
            'skaneleden': '<img src="../images/map-skaneleden.jpg" alt="Karta över Skåneleden">',
            'bergslagsleden': '<img src="../images/map-bergslagsleden.jpg" alt="Karta över Bergslagsleden">'
        };
        
        if (trailMap) {
            if (mapPlaceholders[trailId]) {
                trailMap.innerHTML = mapPlaceholders[trailId];
            } else {
                trailMap.innerHTML = '<p>Karta är inte tillgänglig för den här leden.</p>';
            }
        }
    }
});
