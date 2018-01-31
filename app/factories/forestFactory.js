"use strict";

angular.module("NationalParks").factory("ForestFactory", (FBUrl, $http, $q) => { 

  // grabs all forests from firebase
  function getForests() {
    return $q((resolve, reject) => {
      $http.get(`${FBUrl}/forests.json`)
      .then(({data}) => {
        data.map((forest, index) => {
          forest.id = index; // data returns as an array of anonymous objects, so I add an id of each items array index
        });
        resolve(data);
      });
    });
  }

  return {getForests};
});