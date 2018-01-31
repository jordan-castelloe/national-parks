'use strict';

angular.module("NationalParks").controller("NavCtrl", function ($scope, $location, $window, AuthFactory) {

  $scope.navItems= [
    {
      name: "Logout",
      url: "#!/logout"
    },
    {
      name: "Forests",
      url: "#!/forests"
    },
    {
      name: "My Favorites",
      url: "#!/forests/favorites"
    }
  ];

  //hides the login button once the user is logged in
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $scope.$apply($scope.isLoggedIn = true);
    } else {
      $scope.isLoggedIn = false;
      $scope.$apply();
      $window.location.href = "#!/login";
    }
  });

  // navigates to the appropriate url
  // logs user out
  $scope.navigate = navUrl => {
    if (navUrl === "#!/logout") {
      AuthFactory.logoutUser();
    } else {
      $window.location.href = navUrl;
    }
  };
});
