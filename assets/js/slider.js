// Les variables du slider
let slideMove = 0
const amount = 70

// Permet de cliquer sur les flèches du planning
$('.arrow').click(function() {
  const agenda = $('.agenda li')
  if($(this).data('direction') == 'left') {
    slideMove += amount
  } else if($(this).data('direction') == 'right') {
    slideMove -= amount
  }
  agenda.css('transform', `translateX(${slideMove}px)`)
  
  // Met à jour le slider en même temps
  $('#myRange').val(-slideMove/amount)
})

// Fonction pour changer écouter les changements du slider
$(document).on('input', '#myRange', function() {
  const value = $(this).val()
  const agenda = $('.agenda li')

  // Pour garder la cohérence si on utilise les flèches après
  slideMove = amount * value
  agenda.css('transform', `translateX(-${slideMove}px)`)
  slideMove = -slideMove
})