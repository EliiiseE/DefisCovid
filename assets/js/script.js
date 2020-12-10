// Liste des défis - 14 minimum pour tenir une semaine si on choisit qu'une préférence
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
let userPlanningDays = []
const durationPlanning = 14

// La variable pour modifier le texte
const textChallenge = $('#title_challenge')

// Les variables du slider
let slideMove = 0
const amount = 70

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

    // Crée un tableau avec les 14 jours à partir d'aujourd'hui pour garder en mémoire le début du planning
    userPlanningDays = [] // Reset la variable
    const actualDay = new Date()
    const nextDay = new Date(actualDay)
    for(let i = 0; i < userPlanning.length; i++) {
      nextDay.setDate(actualDay.getDate() + i)
      userPlanningDays.push([nextDay.getDay(), nextDay.getDate()])
    }
    // Garde en mémoire les jours
    localStorage.setItem("days", JSON.stringify(userPlanningDays))

    $('.loading-planning').fadeOut()

    // Affiche le planning
    displayPlanning()
  }
}

// Fonction pour afficher le planning générer aléatoirement
const displayPlanning = () => {
  // Affiche l'ancien agenda si on en génère un nouveau
  $('.agenda').children("li").remove()
  const today = new Date()
  for(let i = 0; i < userPlanning.length; i++) {
    // Met le jour actuel en surlignement
    $('.agenda').append(`<li><span class="day_text">${days[userPlanningDays[i][0]]}</span><span class="day_number ${today.getDate() == userPlanningDays[i][1] ? 'active' : ''}">${userPlanningDays[i][1]}</span></li>`)
  }
  
  // Affiche le bon challenge
  displayChallenge()
      
  // Permet de cliquer sur les nombre du planning - à mettre ici pour prendre en compte la création de l'élément
  $('.day_number').click(function() {
    $('.day_number').removeClass('active')
    $(this).addClass('active')
    displayChallenge()
  })
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
  const userPlanningDaysLoaded = JSON.parse(localStorage.getItem("days"))
  if(userPlanningLoaded && userPlanningDaysLoaded) {
    userPlanning = userPlanningLoaded
    userPlanningDays = userPlanningDaysLoaded
    displayPlanning()
  }
})

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

// Fonction pour changer le texte du challenge
const displayChallenge = () => {
  const days = $('.day_number')
  const day = $('.day_number.active')
  const indexOfChallenge = days.index(day[0])
  
  textChallenge.html(userPlanning[indexOfChallenge])
}

// Fonction pour changer écouter les changements du slider
$(document).on('input', '#myRange', function() {
  const value = $(this).val()
  const agenda = $('.agenda li')

  // Pour garder la cohérence si on utilise les flèches après
  slideMove = amount * value
  agenda.css('transform', `translateX(-${slideMove}px)`)
  slideMove = -slideMove
})