document.addEventListener("DOMContentLoaded", function() {
    const heroContent = document.querySelector(".hero-content");
    const heroImages = document.querySelectorAll(".hero-img");
  
    
    setTimeout(function() {
      heroContent.classList.add("show");
    }, 500); // 0.5 sekunnin viive
  
    // Alusta viivästysaika kuvien lisäämiselle
    let delay = 500; 
  
    
    heroImages.forEach(function(img) {
        setTimeout(function() {
            img.classList.add("show");
        }, delay);
        
        delay += 250; // Lisää viivästystä seuraavaan kuvaan
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.querySelector(".about");
  
    window.addEventListener("scroll", function() {
      // onko about-osio näkyvissä
      if (isInViewport(aboutSection)) {
        aboutSection.classList.add("show");
      }
    });
  
    // onko elementti näkyvissä näytöllä
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const serviceItems = document.querySelectorAll(".service-item");
  
    //viivästysaika alusta
    let delay = 2500;
  
    // Käy läpi My Services -osion osiot
    serviceItems.forEach(function(item) {
        setTimeout(function() {
            item.classList.add("show");
        }, delay);
        
        delay += 400; // Lisää viivästystä seuraavaan osioon
    });
  });