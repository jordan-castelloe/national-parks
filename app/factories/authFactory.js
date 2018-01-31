"use strict";

angular.module("NationalParks").factory("AuthFactory", (FBCreds, $q) => {
  let authObj = {};
  let currentUser = null;

  authObj.createUser = ({ email, password }) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  };

  authObj.loginUser = ({ email, password }) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  };

  authObj.logoutUser = () => {
    return firebase.auth().signOut();
  };

  return authObj;
});