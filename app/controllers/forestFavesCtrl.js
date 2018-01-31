'use strict';

angular.module("NationalParks").controller("ForestFavoritesCtrl", function ($scope, ForestFactory) {
  $scope.test = "This is the favorites controller!";
  const uid = firebase.auth().currentUser.uid;
  console.log("this is the user id from the faves controller", uid);
  ForestFactory.getFavorites(uid)
  .then(favorites => {
    $scope.forestList = favorites;
  });
});