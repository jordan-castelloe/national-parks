'use strict';
// /register
//   / login
//   / forests
//   / forests / favorite
//   / forest /: id
angular
  .module("NationalParks", ["ngRoute"])
  .constant("FBUrl", "https://todo-app-42851.firebaseio.com" // I reused my todo app database for this project so it's still called the todo app but it's the right data, I promise
)
  .config($routeProvider => {
    $routeProvider
      .when("/register", {
        templateUrl: "partials/user-form.html",
        controller: "RegisterCtrl"
      })
      .when("/login", {
        templateUrl: "partials/user-form.html",
        controller: "LoginCtrl"
      })
      .when("/forests", {
        templateUrl: "partials/forest-list.html",
        controller: "ForestListCtrl",
        
      })
      .when("/forests/favorites", {
        templateUrl: "partials/forest-list.html",
        controller: "ForestFavoritesCtrl",
      })
      .when("/forests/:id", {
        templateUrl: "partials/forest-details.html",
        controller: "ForestDetailsCtrl",
      })
      .otherwise("/forests");
  })
  .run(FBCreds => {
    let authConfig = {
      apiKey: FBCreds.key,
      authDomain: FBCreds.authDomain
    };
    firebase.initializeApp(authConfig);
  });