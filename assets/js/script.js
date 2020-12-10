// Liste des défis - 14 minimum pour tenir une semaine si on choisit qu'une préférence
const tvChallenge = ['Regarder la saga <span>Ghost busters</span>', 'Regarder la saga <span>Jurassic Park </span>', 'Regarder la saga <span>Indiana Jones</span>', 
'Regarder la saga <span>Pirates des Caraibes</span>', 'Regarder en une journée les<span> Star Wars </span>', 'Regarder le matin un <span> Télé Achats</span>',
 'Regarder la série <span>Friends</span>', 'Regarder toutes la saga <span> Harry Potter </span>', 'Regarder la série <span>Prison Break</span>', 'Regarder tous les <span>Avengers</span>', 
'Passer la journée à regarder des <span> reportages arte</span>', 'Regarder la série des <span>Simpson</span> depuis la S01E01', 'Regarder la série <span>Super- natural</span>', 'Regarder des <span>films de Noël</span> ']

const mobileChallenge = ['Faire du <span>shopping</span> sur vinted', 'Gagner à <span>2048</span>', 'Jouer à <span>Codifit Gruikui</span>',
 'Terminer 250 niveaux à <span>Candy Crush</span> Saga', 'Jouer à <span> Simcity</span>', 'Jouer à <span> Tetris</span>', 'Jouer à <span> Snake</span>', 'Monter légende sur <span> Hearth-Stone</span>', 
 'Faire du yoga via l\'apps <span>Petit Bambou</span>', 'Télécharger un <span>Apps</span> au hasard et y jouer', 'Trier ton <span>téléphone</span>', 'Faire un <span>soduku</span> sur mobile', 'Jouer au <span>scrabble</span> sur mobile', 'Jouer en ligne au <span>monopoly</span> sur mobile']

const extraordinaryChallenge = ['Faire un <span>collier de pâtes</span>', 'Faire la momie avec du<span> papier toilette</span>', 'Ranger tous les <span>livres</span> par ordre alphabétique', 'Trier toutes tes <span>photos</span>', 
'Ecrire un <span>poème</span>', 'Mets toi sur ton <span>31</span>', '<span>Trier</span> tes papiers importants', 
'Faire un trie dans tes <span>vêtements</span>', 'Réorganiser <span>la décoration</span>', 'Dessiner <span>la vue</span> de sa fenêtre', 'Faire de la <span>pâte à sel</span>', 'Lire un livre <span>jamais lu</span>', 'Regarder et faire un <span>DYE</span>', '<span>Espionner</span> ce que fait ton entourage']

const travelChallenge = ['Ecrire un <span>Haïku</span>', 'Programmer tes <span>futur voyages</span>', 'Apprendre une nouvelle <span> langue</span>', 'Apprendre à chanter du <span>Yodel</span>', 'Apprendre les <span>capitales de 15 pays</span>', 'Ecouter de la musique<span> celtique</span>', 
'Ecouter de la musique <span>relaxante</span>', 'Apprendre <span>5 caractères chinois</span>', 'Ecouter le groupe <span>The Hu</span>',
 'Faire le tour du monde sur <span>Google Map</span> ', 'Ecouter de la <span>Kpop</span>', 'Ecouter de la <span>Jpop</span> ', 'Apprenez à dire <span>"Bière!"</span> en 5 langues', 'Planifier son <span>tour du monde</span>']

const cookChallenge = ['Faire un <span>Gâteau Géant</span>', 'Faire des <span>crêpes salées</span>', 'Faire la cuisine avec que des <span>ingrédients verts</span>', 'Préparer une <span>ratatouille</span>', 'Faire un <span>burger végétarien</span>', 'Faire des lasagnes<span> Veggie</span> ', 
'Faire un <span>rainbow cake</span>', 'Cuisiner uniquement des <span>aliments crus</span> ', 'Faire un gâteau <span>sans oeufs</span>', 'Manger <span>Vegan</span>', 'Manger des<span> bonbons</span> toutes la journée', ' Faire une <span>mousse au chocolat</span>', 'Manger que des aliments commençant par la lettre <span>C</span>', 'Faire des <span>cookies</span>']

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