document.addEventListener("DOMContentLoaded", function() {
  const heroContent = document.querySelector(".hero-content");
  const heroImages = document.querySelectorAll(".hero-img");

  // Viive 
  setTimeout(function() {
    heroContent.classList.add("show");
  }, 500); // 0.5 sekunnin viive

  
  let delay = 700; // viive kuvien lisäämiselle

  heroImages.forEach(function(img) {
    setTimeout(function() {
      img.classList.add("show");
    }, delay);

    delay += 250;
  });

  const aboutSection = document.querySelector(".about");
  const serviceSection = document.querySelector(".services"); 

  window.addEventListener("scroll", function() {
    // Onko about-osio näkyvissä
    if (isHalfInViewport(aboutSection)) { //puolet about-osion sisällöstä näkyvissä
      aboutSection.classList.add("show");
    }

    // Onko osio näkyvissä ja skrollaamassa sen kohdalla
    if (isHalfInViewport(serviceSection)) {
      const serviceItems = document.querySelectorAll(".service-item");

      serviceItems.forEach(function(item, index) {
        setTimeout(function() {
          item.classList.add("show");
        }, (index + 1) * 300); 
      });
    }
  });

  // Onko puolet näkyvissä näytöllä
  function isHalfInViewport(element) {
    const rect = element.getBoundingClientRect();
    const elementHeight = rect.height;
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const scrollY = window.scrollY || window.pageYOffset;

    return (
      rect.top + elementHeight / 2 <= windowHeight + scrollY && // puolivälin tarkistus
      rect.top + elementHeight / 2 >= scrollY // yläreunan tarkistus
    );
  }
});
