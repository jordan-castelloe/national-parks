'use strict';
angular.module("NationalParks").controller("RegisterCtrl", function ($scope, AuthFactory, $window) {
  $scope.title = "Sign Up";
  $scope.buttonText = "I already have an account!";

  $scope.switchViews = () => {
    $window.location.href = "#!/login";
  };

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