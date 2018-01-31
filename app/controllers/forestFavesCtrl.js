'use strict';

angular.module("NationalParks").controller("ForestFavoritesCtrl", function ($scope, ForestFactory) {
  $scope.test = "This is the favorites controller!";
  const uid = firebase.auth().currentUser.uid; // grab the user's id from firebase
  const faves = []; // declare an empty array to store the user's favorites in
  ForestFactory.getFavorites(uid) // first get all of the user's favorites from firebase
  .then(favorites => { // then loop through those favorites and pass each forest id into the getSingleForest function
    for (let fave in favorites){
      ForestFactory.getSingleForest(favorites[fave].forestId)
      .then (forest => {
        forest.id = favorites[fave].forestId;
        console.log("this should have an id", forest);
        faves.push(forest); // once you have the individual forest, push it into the empty array
      });
      $scope.forestList = faves; // set the array of favorited forests on the scope variable
    }
  });
});