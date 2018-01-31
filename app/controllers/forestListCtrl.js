'use strict';
angular.module("NationalParks").controller("ForestListCtrl", function ($scope, ForestFactory) {
  $scope.title = "National Forests";

  const createFavorite = (uid, forestId) => {
    const favoriteObj = { uid, forestId };
    ForestFactory.addFavorite(favoriteObj);
  };

  $scope.addToFavorites = (forestId) => {
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