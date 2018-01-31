'use strict';
angular.module("NationalParks").controller("RegisterCtrl", function ($scope, AuthFactory, $window) {
  $scope.title = "Sign Up";
  $scope.buttonText = "I already have an account!";

  // called on "I already have an account!" button click
  // navigates to login screen
  $scope.switchViews = () => {
    $window.location.href = "#!/login";
  };

  // creates new user 
  // logs user in
  // navigates to forest page
  $scope.submitUserInfo  = () => {
    AuthFactory.createUser($scope.user)
    .then (() => {
     AuthFactory.loginUser($scope.user)
      .then (() => {
        $window.location.href = "#!/forests";
      });
    });
  };
});