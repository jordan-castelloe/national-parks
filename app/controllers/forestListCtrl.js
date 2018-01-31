'use strict';
angular.module("NationalParks").controller("ForestListCtrl", function ($scope, ForestFactory) {
  $scope.title = "National Forests";

  // helper function: creates a favorite object with the user's id and the forest id an send to the factory 
  const createFavorite = (uid, forestId) => {
    const favoriteObj = { uid, forestId };
    ForestFactory.addFavorite(favoriteObj);
  };

  // called when the user clicks "add to favorites" button, grabs user id and forest id and passes them into createFavorite helper function
  $scope.addToFavorites = (forestId) => {
    const uid = firebase.auth().currentUser.uid;
    if (uid !== null){
      createFavorite(uid, forestId);
    } else {
      console.log("You have to be logged in to add a forest to your favorites!");
    }
  };

  // loads all the forests from firebase
  ForestFactory.getForests()
  .then(forests => {
    $scope.forestList = forests;
  });
});