'use strict';

angular.module("NationalParks").controller("ForestDetailsCtrl", function ($scope, $routeParams, ForestFactory) {
  $scope.test = "This is the forest details controller!";

  ForestFactory.getSingleForest($routeParams.id)
  .then (forest => {
    $scope.forest = forest;
  });

});