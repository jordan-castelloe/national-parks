'use strict';

angular.module("NationalParks").controller("NavCtrl", function ($scope, $location) {
  // $scope.isActive = (viewLocation) => viewLocation === $location.path();

  $scope.navItems= [
    {
      name: "Logout",
      url: "#!/logout"
    },
    {
      name: "Login",
      url: "#!/login",
      bang: "!"
    },
    {
      name: "Forests",
      url: "#!/forests"
    },
    {
      name: "My Favorits",
      url: "#!/forests/favorites"
    }
  ];
});
