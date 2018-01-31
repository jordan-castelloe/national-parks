'use strict';
angular.module("NationalParks").controller("LoginCtrl", function ($scope, AuthFactory){
  $scope.test = "This is the login controller!";
  $scope.submitUserInfo = () => {
    AuthFactory.loginUser($scope.user);
  };
});