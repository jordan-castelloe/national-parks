'use strict';
// /register
//   / login
//   / forests
//   / forests / favorite
//   / forest /: id
angular
  .module("NationalParks", ["ngRoute"])
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
      .when("/forests/:id", {
        templateUrl: "partials/forest-details.html",
        controller: "ForestDetailsCtrl",
      })
      .when("/forests/favorites", {
        templateUrl: "partials/forest-list.html",
        controller: "ForestFavoritesCtrl",
      })
      .otherwise("/login");
  });