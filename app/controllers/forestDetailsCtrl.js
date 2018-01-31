'use strict';

angular.module("NationalParks").controller("ForestDetailsCtrl", function ($scope, $routeParams, ForestFactory) {
  $scope.title = "More about this forest";

  ForestFactory.getSingleForest($routeParams.id)
  .then (forest => {
    $scope.forest = forest;
  });

});