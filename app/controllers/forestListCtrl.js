'use strict';
angular.module("NationalParks").controller("ForestListCtrl", function ($scope, ForestFactory) {
  $scope.test = "This is the forest list controller!";
  ForestFactory.getForests()
  .then(forests => {
    console.log("forest data from within controller", forests);
    // $scope.forestList = forests;
  });
});