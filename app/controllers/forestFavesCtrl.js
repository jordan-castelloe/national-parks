'use strict';

angular.module("NationalParks").controller("ForestFavoritesCtrl", function ($scope, ForestFactory) {
  $scope.title = "My Favorite Parks";
  const faves = []; 
  // get user's favorites with the user's id
  // favorites return as objects with user id and forest id property (example: {forestId: 1234, userId: 4321})
  // grab the forest id and pass it into a getSingleForest function, which returns the forest object (example: {name, details, location})
  // push each individual forest object into a global array variable and then set the global array variable as a property on $scope
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

  //evaluated in ng-hide to hide the "add to favorites" button when you're on the favorites page
  $scope.onFavoritesPage = true;

// if the user is logged in, load their favorites. If not, load an error message
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      const uid = user.uid; 
      getFavorites(uid);
    } else {
      $scope.error = "I'm sorry, you have to be logged in to view your favorites!";
    }
  });

  

  
});