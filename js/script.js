// DECONNEXION
const signoutBtn = document.getElementById("signout-btn");
const RoleCookieName = "role";

signoutBtn.addEventListener("click", signout);

function signout(){
    eraseCookie(tokenCookieName);
    eraseCookie(RoleCookieName);
    window.location.reload();
}



// AJOUTER LE TOKEN EN COOKIE
const tokenCookieName = "accesstoken"

function setToken(token) {
    setCookie(tokenCookieName, token, 7);
}

function getToken(){
    return getCookie(tokenCookieName);
}



// GESTION DES COOKIES

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}



// SAVOIR SI CONNECTE OU PAS
 
function isConnected(){
    if (getToken() == null || getToken == undefined){
        return false;
    } else {
        return true;
    }
}








// RECUPERER LE ROLE DE L'UTILISATEUR
function getRole(){
    return getCookie(RoleCookieName);
}



//LISTE DES UTILISATEURS
/*
disconnected
connected 
    - admin
    - client
*/

// Afficher et masques les éléments en fonction du role de l'utilisateur
function showAndHideElementsForRoles(){
    const userConnected = isConnected();
    const role = getRole();

    let allElementsToEdit = document.querySelectorAll('[data-show]');

    allElementsToEdit.forEach(element => {
        switch(element.dataset.show){
            case 'disconnected':
                if(userConnected){
                    element.classList.add("d-none");
                }
                break;
            case 'connected':
                if(!userConnected){
                    element.classList.add("d-none");
                }
                break;
            case 'admin':
                if(!userConnected || role != "admin"){
                    element.classList.add("d-none");
                }
                break;
            case 'client':
                if(!userConnected || role != "client"){
                    element.classList.add("d-none");
                }
                break;
        }
    })
}