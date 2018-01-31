'use strict';
angular.module("NationalParks").controller("ForestListCtrl", function ($scope, ForestFactory) {
  $scope.test = "This is the forest list controller!";
  ForestFactory.getForests()
  .then(forests => {
    $scope.forestList = forests;
  });
});