"use strict";
app.controller('LandingPagesCtrl', function($scope, AuthFactory, $window) {
  console.log("You are in the Landing Pages Controller");




  let logout = () => {
    console.log("logout clicked");
    AuthFactory.logoutUser()
    .then(function(data){
      console.log("logged out?", data);



      $window.location.url = "#/login";
    }, function(error){
      console.log("error occured on logout");
    });
  };

});
