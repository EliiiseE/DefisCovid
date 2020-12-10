// Les variables globals
const cookiesDisplay = $('.cookie')
const mainDisplay = $('.main')

// Fonction qui s'active lorsqu'on accepte les cookies
const cookiesAccepted = () => {
    setCookie("isAccepted", true, 365)
    hideCookiesPopup()
}

// Fonction qui s'active lorsqu'on refuse les cookies
const cookiesDeclined = () => {
    setCookie("isAccepted", false, 365)
    hideCookiesPopup()
}

// Fonction pour afficher la popup de cookie
const showCookiesPopup = () => {
    mainDisplay.hide()
    cookiesDisplay.show()
}

// Fonction pour cacher la popup de cookie
const hideCookiesPopup = () => {
    cookiesDisplay.hide()
    mainDisplay.show()
}

// Fonction pour créer un cookie
const setCookie = (name, value, exdays) => {
    let day = new Date()
    day.setTime(day.getTime() + (exdays * 24 * 60 * 60 * 1000))
    let expires = "expires=" + day.toUTCString()
    document.cookie = `${name}=${value};${expires};path=/`
}

// Fonction pour récupérer un cookie
const getCookie = (cname) => {
    let name = cname + "="
    let decodedCookie = decodeURIComponent(document.cookie)
    let ca = decodedCookie.split(';')
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) == ' ') {
        c = c.substring(1)
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length)
        }
    }
    return ""
}

// Fonction pour vérifier un cookie
const checkCookie = () => {
    let isAccepted = getCookie("isAccepted")
    if (isAccepted != "") {
        return true
    }
}

// Fonction qui s'exécute lorsque le document est chargé
$(document).ready(function() {
    // On vérifie si les cookies ont déjà été accepté ou refusé pour ne pas les redemander
    if(!checkCookie()) {
        showCookiesPopup()
    }
})