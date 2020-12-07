// Liste des défis - 14 minimum pour tenir une semaine si on choisit que une préférence
const tvChallenge = ['tv1', 'tv2', 'tv3', 'tv4', 'tv5', 'tv6', 'tv7', 'tv8', 'tv9', 'tv10', 'tv11', 'tv12', 'tv13', 'tv14']
const mobileChallenge = ['mobile1', 'mobile2', 'mobile3', 'mobile4', 'mobile5', 'mobile6', 'mobile7', 'mobile8', 'mobile9', 'mobile10', 'mobile11', 'mobile12', 'mobile13', 'mobile14']
const extraordinaryChallenge = ['extraordinary1', 'extraordinary2', 'extraordinary3', 'extraordinary4', 'extraordinary5', 'extraordinary6', 'extraordinary7', 'extraordinary8', 'extraordinary9', 'extraordinary10', 'extraordinary11', 'extraordinary12', 'extraordinary13', 'extraordinary14']
const travelChallenge = ['travel1', 'travel2', 'travel3', 'travel4', 'travel5', 'travel6', 'travel7', 'travel8', 'travel9', 'travel10', 'travel11', 'travel12', 'travel13', 'travel14']
const cookChallenge = ['cook1', 'cook2', 'cook3', 'cook4', 'cook5', 'cook6', 'cook7', 'cook8', 'cook9', 'cook10', 'cook11', 'cook12', 'cook13', 'cook14']

// Liste pour mettre en relation les data-list et les défis - plus simple pour la suite
const dataListToChallenge = [
  ['tv', tvChallenge],
  ['mobile', mobileChallenge],
  ['extraordinary', extraordinaryChallenge],
  ['travel', travelChallenge],
  ['cook', cookChallenge]
]

// Commence à Dimanche car c'est en anglais pour le Date.getDay()
const days = ['D', 'L', 'M', 'M', 'J', 'V', 'S']

// Les variables global
let userPreferencesChallenge = []
// La variable est enregistré dans un localStorage pour garder en mémoire le planning
let userPlanning = []
const durationPlanning = 14

// Permet de garder lors du clique le bouton activé
$('.button-preferences').click(function() {
  $(this).toggleClass('active')
  // Permet de désactiver le bouton tous les défis quand ils ne sont pas tous sélectionnés
  if(!$(this).hasClass('active') && $(this)[0].id != 'button-all-challenge') {
    $('#button-all-challenge').removeClass('active')
  }
})

// Permet de tout sélectionner avec le bouton tous les défis
$('#button-all-challenge').click(function() {
  if($(this).hasClass('active')) {
    $('.button-preferences').addClass('active')
  } else {
    $('.button-preferences').removeClass('active')
  }
})

// Fonction pour générer le planning
const generatePlanning = () => {
  const userPreferences = $('.button-preferences.active')

  // Met un message d'erreur si l'utilisateur n'a pas choisi de préférence
  if(userPreferences.length == 0) {
    $('.error-planning').show()
  } else {
    $('.error-planning').hide()
    $('.loading-planning').fadeIn()

    // Ajouter chaque tableau de défis à un autre tableau, pour tous les avoir dans le même et pouvoir piocher au hasard
    userPreferencesChallenge = [] // Reset la variable
    for(let i = 0; i < userPreferences.length; i++) {
      for(let j = 0; j < dataListToChallenge.length; j++) {
        if(dataListToChallenge[j].includes($(userPreferences[i]).data('list'))) {
          for(let k = 0; k < dataListToChallenge[j][1].length; k++) {
            userPreferencesChallenge.push(dataListToChallenge[j][1][k])
          }
        }
      }
    }

    // Permet de prendre au hasard dans le tableau en vérifiant les doublons
    userPlanning = [] // Reset la variable
    while(userPlanning.length < durationPlanning) {
      let randomChallenge = userPreferencesChallenge[getRandom(0, userPreferencesChallenge.length-1)]
      if(!userPlanning.includes(randomChallenge)) {
        userPlanning.push(randomChallenge)
      }
    }
    // Garde en mémoire le planning
    localStorage.setItem("planning", JSON.stringify(userPlanning))

    $('.loading-planning').fadeOut()

    // Affiche le planning
    displayPlanning(userPlanning)
  }
}

// Fonction pour afficher le planning générer aléatoirement
const displayPlanning = (planning) => {
  // Affiche l'ancien agenda si on en génère un nouveau
  $('.agenda').children("li").remove()

  // Permet d'avoir les 14 jours à partir du jour de création du planning
  const actualDay = new Date()
  const nextDay = new Date(actualDay)

  for(let i = 0; i < planning.length; i++) {
    nextDay.setDate(actualDay.getDate() + i)
    $('.agenda').append(`<li><span>${days[nextDay.getDay()]}</span>${nextDay.getDate()}</li>`)
  }
}

// Fonction pour avoir un nombre aléatoire dans un intervalle fermé
const getRandom = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min +1)) + min
}

// Fonction pour charger le planning de l'utilisateur si il l'a déjà généré
$(document).ready(function() {
  const userPlanningLoaded = JSON.parse(localStorage.getItem("planning"))
  if(userPlanningLoaded) {
    displayPlanning(userPlanningLoaded)
  }
})

// Permet de cliquer sur les flèches du planning
$('.arrow').click(function() {
  const agenda = $('.agenda li')
  const offset = agenda.offset()
  if($(this).data('direction') == 'left') {
    agenda.css('transform', `translateX(${offset.left + 20}px)`)
  } else if($(this).data('direction') == 'right') {
    agenda.css('transform', `translateX(${offset.left - 100}px)`)
  }
})