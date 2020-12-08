// Les variables globals
const cookiesDisplay = $('.cookie')
const mainDisplay = $('.main')

// Fonction qui s'active lorsqu'on accepte les cookies
const cookiesAccepted = () => {
    document.cookie = 'isAccepted=true'
    hideCookiesPopup()
}

// Fonction qui s'active lorsqu'on refuse les cookies
const cookiesDeclined= () => {
    document.cookie = 'isAccepted=false'
    hideCookiesPopup()
}

// Fonction pour cacher la popup et afficher le site
const hideCookiesPopup = () => {
    cookiesDisplay.hide()
    mainDisplay.show()
}

// Fonction qui s'exécute lorsque le document est chargé
$(document).ready(function() {
    // On vérifie si les cookies ont déjà été accepté ou refusé pour ne pas les redemander
    if(false) {
        hideCookiesPopup()
    }
})

// A FINIR