'use strict';

angular
  .module("NationalParks", ["ngRoute"])
  .config($routeProvider => {
    $routeProvider
      .when("/login", {
        templateUrl: "partials/user-form.html",
        controller: "LoginCtrl"
      })
      .when("/forests/list", {
        templateUrl: "partials/forest-list.html",
        controller: "ForestListCtrl",
        
      })
      .when("/forests/details", {
        templateUrl: "partials/forest-details.html",
        controller: "ForestDetailsCtrl",
      })
      .when("/forests/favorites", {
        templateUrl: "partials/forest-list.html",
        controller: "ForestFavoritesCtrl",
      })
      .otherwise("/login");
  });