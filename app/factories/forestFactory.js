"use strict";

angular.module("NationalParks").factory("ForestFactory", (FBUrl, $http, $q) => { 

  // grabs all forests from firebase
  function getForests() {
    return $q((resolve, reject) => {
      $http.get(`${FBUrl}/forests.json`)
      .then(({ forestData }) => {
        console.log("this should be all the forests from inside the promise", forestData);
        resolve(forestData);
      });
    });
  }

  return {getForests};
});