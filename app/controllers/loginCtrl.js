'use strict';
angular.module("NationalParks").controller("LoginCtrl", function ($scope, AuthFactory, $window){
  $scope.title = "Login";
  $scope.buttonText = "I need to make an account!";

  $scope.switchViews = () => {
    $window.location.href = "#!/register";
  }; 
  
  $scope.submitUserInfo = () => {
    AuthFactory.loginUser($scope.user)
    .then(() => {
      $window.location.href = "#!/forests";
    });
  };
});