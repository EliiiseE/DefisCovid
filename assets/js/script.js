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

// Liste des icons pour le planning
const dataIconList = [
  'tv.svg',
  'mobile.svg',
  'extraordinary.svg',
  'travel.svg',
  'cake.svg'
]
const iconChallenge = $('.icon_challenge')

// Liste des trophées dans l'ordre des défis - code pas très propre mais c'était plus simple après y avoir déjà fait le reste (fonction implémenté à la toute fin)
const tvTrophy = ['Chasseur de<br />Fantômes', 'Créateur de<br />Dinosaures', 'Grand<br >Aventurier', 
'Ohé<br />Moussaillon', 'Chevalier<br />Jedi', 'Victime de la<br />Tentation',
 'Pote à la<br />Compote', 'Sorcier de<br />Poudlard', 'Maître de<br />L\'évasion', 'Super Héros', 
'Être cultivé', 'Oh pinaise', 'Chasseur de<br />Mythes', 'L\'esprit de<br />Noël']

const mobileTrophy = ['Acheteur<br />Compulsif', 'Fin stratège', 'Dresseur<br />Pokémon',
 'Fou à lier', 'Architecte<br />Diplômé', 'Maître des<br />Formes', 'Glouton', 'Le deck<br />Ultime', 
 'Souplesse<br />Incarnée', 'Joueur du<br />Dimanche', 'TNettoyage', ' Neurones<br />d\'acier', 'Prof de<br />Français', 'Rue de la <br />paix']

const extraordinaryTrophy = ['Beauté<br />Commestible', 'Cosplay<br />Low Cost', 'Maniaque du<br />Rangement', ' Souvenirs<br />Ordonnés', 
'Maître de la<br />Plume', 'Avoir la<br />Classe', 'Rigoureux', 
'Vêtements<br />Oubliés', 'Décorateur de<br />Talent', 'Coup de<br />Crayon', 'Pâtissier', 'Ouverture<br />D\'esprit', 'Bob le<br />Bricoleur', 'Agent<br />Secret']

const travelTrophy = ['Poète dans<br />Lâme', 'Guide<br />Touristique', 'Polyglote<br />Débutant', 'Voix divine', 'Géographe', 'Viking', 
'Paix<br />Intérieure', 'Caligraphe', 'The Hu fan',
 'Explorateur', 'Korean style', 'Japanese style ', 'Alcoolique<br />Cultivé', ' Meilleur que<br />Christophe<br />Colomb']

const cookTrophy = ['Master Cake', 'Sang Breton', 'Goût de la<br />Nature', 'Rat aux<br />Commandes', 'Presque un<br />Vrai steak', 'Garfield Vegan', 
'Mille couleurs<br />En sucre', 'Avant la<br />Découverte<br />Du feu ', 'Pâtissier<br />Sous pression', 'Vegganisme', 'Diabète', 'Fort en<br />Chocolat', 'C bon', 'Cuisine de<br />Mamie']

// Liste pour mettre en relation tous les trophées - plus simple pour la suite
const dataTrophy = [
  tvTrophy,
  mobileTrophy,
  extraordinaryTrophy,
  travelTrophy,
  cookTrophy
]

// Tableau des citations
const citation = ['Les infusion de thyms, de fleurs de sureau, de sauge, et/ou de gingembre permet de calmer ton rhum',
'Boire du bouillon de poule permet d\'agir comme anti- inflammatoire',
'Fais des inhalations avec un grand bol d\'eau chaude et une serviette sur ta tête !',
'Les huiles essentielle et surtout celle de menthe poivrée permet de calmer ton rhume',
'Pas glamour mais utile ! Les gousses d’ail permettent de décongestionner le nez',
'Le jus de tomates permet de calmer le nez et la gorge !',
'Bois un verre d\'eau chaude avec du vinaigre de cidre et du miel. Cela permettra de décongestionner ton nez !',
'Prendre un bain chaud avec du bicarbonate de sodium te permet de diminuer tes courbatures',
'La badiane est excellente dans des salades de fruits et en plus cela contre les troubles digestifs !',
'Prendre un bon bain chaud 5 avec de la camomille permet de réduire tes courbatures !',
'L\'infusion de cannelle est très efficace contre le rhume et encore plus associer a du miel et citron',
'Ajoute trois gouttes d\'huile essentielle d\'eucalyptus dans un bol d\'eau très chaude et respire la vapeur et tu respireras de nouveau !',
'Mets toi des poches de glace contre ta tête si tu as mal',
'Un bon jus de carotte  permet de booster ton organisme  et lutter contre la fatigue !']

// Commence à Dimanche car c'est en anglais pour le Date.getDay()
const days = ['D', 'L', 'M', 'M', 'J', 'V', 'S']

// Les variables global
let userPreferencesChallenge = []
let userPreferencesChallengeIcon = []
let userPreferencesTrophy = []
// La variable est enregistré dans un localStorage pour garder en mémoire le planning
let userPlanning = []
let userPlanningIcon = []
let userPlanningDays = []
let userTrophy = []
let userTrophyLocked = []
const durationPlanning = 14

// La variable pour modifier le texte
const textChallenge = $('#title_challenge')
const textCitation = $('.citation')
const trophy = $('.trophy.boxes')

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
    //$('.loading-planning').fadeIn()

    // Ajouter chaque tableau de défis à un autre tableau, pour tous les avoir dans le même et pouvoir piocher au hasard
    userPreferencesChallenge = [] // Reset la variable
    userPreferencesChallengeIcon = [] // Reset la variable
    userPreferencesTrophy = [] // Reset la variable
    for(let i = 0; i < userPreferences.length; i++) {
      for(let j = 0; j < dataListToChallenge.length; j++) {
        if(dataListToChallenge[j].includes($(userPreferences[i]).data('list'))) {
          for(let k = 0; k < dataListToChallenge[j][1].length; k++) {
            userPreferencesChallenge.push(dataListToChallenge[j][1][k])
            userPreferencesChallengeIcon.push(dataIconList[j]) // Ajoute dans le même ordre que les missions, l'icone correspondante
            userPreferencesTrophy.push(dataTrophy[j][k]) // Ajoute dans le même ordre que les missions, l'icone correspondante
          }
        }
      }
    }

    // Permet de prendre au hasard dans le tableau en vérifiant les doublons
    userPlanning = [] // Reset la variable
    userPlanningIcon = [] // Reset la variable
    userTrophy = [] // Reset la variable
    while(userPlanning.length < durationPlanning) {
      let random = getRandom(0, userPreferencesChallenge.length-1)
      let randomChallenge = userPreferencesChallenge[random]
      let randomChallengeIcon = userPreferencesChallengeIcon[random]
      let randomTrophy = userPreferencesTrophy[random]
      if(!userPlanning.includes(randomChallenge)) {
        userPlanning.push(randomChallenge)
        userPlanningIcon.push(randomChallengeIcon)
        userTrophy.push(randomTrophy)
      }
    }
    
    // Garde en mémoire le planning
    localStorage.setItem("planning", JSON.stringify(userPlanning))
    localStorage.setItem("icon", JSON.stringify(userPlanningIcon))
    localStorage.setItem("trophy", JSON.stringify(userTrophy))

    // Crée un tableau avec les 14 jours à partir d'aujourd'hui pour garder en mémoire le début du planning
    userPlanningDays = [] // Reset la variable
    userTrophyLocked = [] // Reset la variable
    const actualDay = new Date()
    const nextDay = new Date(actualDay)
    for(let i = 0; i < userPlanning.length; i++) {
      nextDay.setDate(actualDay.getDate() + i)
      userPlanningDays.push([nextDay.getDay(), nextDay.getDate()])
      userTrophyLocked.push('locked')
    }
    // Garde en mémoire les jours
    localStorage.setItem("days", JSON.stringify(userPlanningDays))
    localStorage.setItem("locked", JSON.stringify(userTrophyLocked))

    //$('.loading-planning').fadeOut()

    // Affiche le planning
    displayPlanning()

    // Affiche les trophées
    displayTrophy()
  }
}

// Fonction pour afficher le planning générer aléatoirement
const displayPlanning = () => {
  $('.hidePlanningAndTrophy').show()
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

// Fonction pour changer le texte du challenge
const displayChallenge = () => {
  const days = $('.day_number')
  const day = $('.day_number.active')
  const indexOfChallenge = days.index(day[0])
  
  textChallenge.html(userPlanning[indexOfChallenge])
  iconChallenge.attr("src", `assets/images/${userPlanningIcon[indexOfChallenge]}`)

  displayCitation()
}

// Fonction pour changer la citation
const displayCitation = () => {
  let newCitation = citation[getRandom(0, citation.length-1)]
  textCitation.html(`"${newCitation}"`)
}

// Fonction pour afficher les trophées
const displayTrophy = () => {
  $('.trophy.boxes .box').remove()
  for(let i = 0; i < userTrophy.length; i++) {
    trophy.append(`<div class="box ${userTrophyLocked[i]}"><div class="box-inner"><h3>${userTrophy[i]}</h3><img class="trophy_icone" src="assets/images/${userPlanningIcon[i]}" /></div><div class="trophy_status_parent"><img class="trophy_status" src="/assets/images/trophy_locked.svg" /></div></div>`)
  }
}

// Fonction pour finir les trophées
const finishMission = () => {
  const days = $('.day_number')
  const day = $('.day_number.active')
  const indexOfChallenge = days.index(day[0])
  
  userTrophyLocked[indexOfChallenge] = "unlocked"
  localStorage.setItem("locked", JSON.stringify(userTrophyLocked))

  displayTrophy()
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
  const userPlanningIconLoaded = JSON.parse(localStorage.getItem("icon"))
  const userPlanningDaysLoaded = JSON.parse(localStorage.getItem("days"))
  const userTrophyLoaded = JSON.parse(localStorage.getItem("trophy"))
  const userTrophyLockedLoaded = JSON.parse(localStorage.getItem("locked"))
  if(userPlanningLoaded && userPlanningDaysLoaded && userPlanningIconLoaded && userTrophyLoaded && userTrophyLockedLoaded) {
    userPlanning = userPlanningLoaded
    userPlanningDays = userPlanningDaysLoaded
    userPlanningIcon = userPlanningIconLoaded
    userTrophy = userTrophyLoaded
    userTrophyLocked = userTrophyLockedLoaded
    displayPlanning()
    displayTrophy()
  }
})