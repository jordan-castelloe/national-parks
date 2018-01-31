'use strict';

angular.module("NationalParks").controller("ForestFavoritesCtrl", function ($scope, ForestFactory) {
  $scope.title = "My Favorite Parks";
  const faves = []; 

  const getFavorites = (uid) => {
    ForestFactory.getFavorites(uid)
      .then(favorites => {
        for (let fave in favorites) {
          ForestFactory.getSingleForest(favorites[fave].forestId)
            .then(forest => {
              forest.id = favorites[fave].forestId;
              faves.push(forest);
            });
          $scope.forestList = faves;
        }
      });
  };

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      const uid = user.uid; 
      getFavorites(uid);
    } else {
      $scope.error = "I'm sorry, you have to be logged in to view your favorites!";
    }
  });

  

  
});