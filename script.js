document.addEventListener("DOMContentLoaded", function() {
    const numStars = 200; // Adjust the number of stars as needed
    const starsContainer = document.getElementById('stars');

    
    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    // Function to create a star
    function createStar() {
        const star = document.createElement('div');
        star.className = 'star';
        const x = randomInRange(0, window.innerWidth); 
        const y = randomInRange(0, window.innerHeight); 
        star.style.left = x + 'px';
        star.style.top = y + 'px';
        starsContainer.appendChild(star);
        
        star.style.animationDelay = randomInRange(0, 5) + 's'; 
    }

    // Create stars
    for (let i = 0; i < numStars; i++) {
        createStar();
    }
});


document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll("#navbar a");
    links.forEach(function(link) {
        link.addEventListener("mouseover", function() {
            this.style.color = "rgba(0, 0, 0, 0.5)";
        });
        link.addEventListener("mouseout", function() {
            this.style.color = "black";
        });
    });
});

