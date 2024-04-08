export default class Route {
    constructor(url, title, pathHtml, authorize, pathJS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
      this.authorize = authorize;
    }
}


// Definition de l'attribut authorize

/*
[] -> tout le monde peut y accéder
["disconnected"] -> Réserver aux utilisateurs déconnecté
["client"] -> Réserver aux utilisateurs avec le rôle client
["admin"] -> Réserver aux utilisateurs avec le rôle admin
["client", "admin"] -> Réserver aux utilisateurs avec le rôle client OU admin 

donc 5 cas possible 

*/