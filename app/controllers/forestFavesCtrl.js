'use strict';

angular.module("NationalParks").controller("ForestFavoritesCtrl", function ($scope, ForestFactory) {
  $scope.title = "My Favorite Parks";
  const uid = firebase.auth().currentUser.uid; 
  const faves = []; 
  ForestFactory.getFavorites(uid) 
  .then(favorites => { 
    for (let fave in favorites){
      ForestFactory.getSingleForest(favorites[fave].forestId)
      .then (forest => {
        forest.id = favorites[fave].forestId;
        faves.push(forest); 
      });
      $scope.forestList = faves; 
    }
  });
});