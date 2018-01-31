'use strict';
angular.module("NationalParks").controller("RegisterCtrl", function ($scope, AuthFactory) {
  $scope.submitUserInfo  = () => {
    AuthFactory.createUser($scope.user);
  };
});