'use strict';
angular.module("NationalParks").controller("ForestListCtrl", function ($scope, ForestFactory) {
  $scope.test = "This is the forest list controller!";

  const createFavorite = (uid, forestId) => {
    const favoriteObj = { uid, forestId };
    ForestFactory.addFavorite(favoriteObj);
  };

  $scope.addToFavorites = (forestId) => {
    console.log("this should be a forest id", forestId);
    const uid = firebase.auth().currentUser.uid;
    if (uid !== null){
      createFavorite(uid, forestId);
    } else {
      console.log("You have to be logged in to add a forest to your favorites!");
    }
  };

  

  ForestFactory.getForests()
  .then(forests => {
    $scope.forestList = forests;
  });
});