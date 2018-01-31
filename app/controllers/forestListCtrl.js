'use strict';
angular.module("NationalParks").controller("ForestListCtrl", function ($scope, ForestFactory) {
  $scope.test = "This is the forest list controller!";

  $scope.addToFavorites = (forestId) => {
    console.log("this should be a forest id", forestId);
    // get current user
    // pass into a patch method 
  };

  ForestFactory.getForests()
  .then(forests => {
    $scope.forestList = forests;
  });
});