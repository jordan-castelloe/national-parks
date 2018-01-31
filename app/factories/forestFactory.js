"use strict";

angular.module("NationalParks").factory("ForestFactory", (FBUrl, $http, $q) => { 

  // grabs all forests from firebase
  function getForests() {
    return $q((resolve, reject) => {
      $http.get(`${FBUrl}/forests.json`)
      .then(({data}) => {
        console.log("this should be all the forests from inside the promise", data);
        resolve(data);
      });
    });
  }

  return {getForests};
});