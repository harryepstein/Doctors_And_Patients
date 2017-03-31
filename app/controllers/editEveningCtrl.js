"use strict";
app.controller('editEveningCtrl', function($routeParams, SleepDataFactory, $scope, $location){

$scope.Button = "Update";
SleepDataFactory.getOneSleepData($routeParams.sleepDataItem)

.then((sleepData) => {

  console.log("this is the other sleepData inside the editEveningCtrl", sleepData);

$scope.sleepData = sleepData.data;

});

$scope.postSleepData = function(sleepData){


  console.log("This is inside the editEveningCtrl and the postSleepData function", sleepData);

  SleepDataFactory.updateSleepData($routeParams.sleepDataItem, sleepData)
  .then((resolve) => {
    $location.url('#!/getData');
  });
};

});
