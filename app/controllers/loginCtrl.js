'use strict';
angular.module("NationalParks").controller("LoginCtrl", function ($scope, AuthFactory, $window){
  $scope.title = "Login";
  $scope.buttonText = "I need to make an account!";

  // called on "I need to make an account!" button click
  // takes you to the register view if you need to create an account
  $scope.switchViews = () => {
    $window.location.href = "#!/register";
  }; 
  
  // gathers up user data and passes to factory
  // navigates to forest page
  $scope.submitUserInfo = () => {
    AuthFactory.loginUser($scope.user)
    .then(() => {
      $window.location.href = "#!/forests";
    });
  };
});