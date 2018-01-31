'use strict';

angular.module("NationalParks").controller("NavCtrl", function ($scope, $location, $window, AuthFactory) {
  // $scope.isActive = (viewLocation) => viewLocation === $location.path();

  $scope.navItems= [
    {
      name: "Logout",
      url: "#!/logout"
    },
    // {
    //   name: "Login",
    //   url: "#!/login",
    //   bang: "!"
    // },
    {
      name: "Forests",
      url: "#!/forests"
    },
    {
      name: "My Favorites",
      url: "#!/forests/favorites"
    }
  ];

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $scope.$apply($scope.isLoggedIn = true);
    } else {
      $scope.isLoggedIn = false;
      $scope.$apply();
      $window.location.href = "#!/login";
    }
  });

  $scope.navigate = navUrl => {
    if (navUrl === "#!/logout") {
      AuthFactory.logoutUser();
    } else {
      $window.location.href = navUrl;
    }
  };
});
