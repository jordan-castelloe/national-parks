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

  // grab single forest by id
  function getSingleForest(id) {
    return $q((resolve, reject) => {
      $http.get(`${FBUrl}/forests/${id}.json`)
      .then(({data}) => {
        resolve(data);
      });
    });
  }

  // add a forest to the user's collections
  function addFavorite(favoriteObj) {
    return $q((resolve, reject) => {
      $http.post(`${FBUrl}/favorites.json`, JSON.stringify(favoriteObj))
      .then(({data}) => {
        resolve(data);
      });
    });
  }

  // get favorites from a user's collection
  function getFavorites(uid) {
    return $q((resolve, reject) => {
      $http.get(`${FBUrl}/favorites.json?orderBy="uid"&equalTo="${uid}"`)
        .then(({ data }) => {
          console.log("this is what you get back from the request for a user's faves", data);
          resolve(data);
        });
    });
  }


  return {getForests, getSingleForest, addFavorite, getFavorites};
});