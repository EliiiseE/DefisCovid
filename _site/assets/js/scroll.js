$(document).ready(function() {
  $('.js-scrollTo').on('click', function() { // Au clic sur un élément qui a cette classe
    let page = $(this).attr('href') // Élément cible
    let speed = 750 // Durée de l'animation (en ms)
    $('html, body').animate( { scrollTop: $(page).offset().top }, speed ) // Exécute l'animation
    return false
  });
});