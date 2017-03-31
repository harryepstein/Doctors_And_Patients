"use strict";
app.controller('editMorningCtrl', function($routeParams, SleepDataFactory, $scope, $location){

$scope.Button = "Update";


SleepDataFactory.getOneSleepData($routeParams.sleepDataItem)
.then((sleepData) => {
  console.log("routeparams.sleepData", $routeParams.sleepDataItem);
$scope.sleepData = sleepData.data;
console.log($scope.sleepData);
});

$scope.postSleepData = function(sleepData){

console.log("This is inside the editMorningCtrl and the postSleepData functino", sleepData);

  SleepDataFactory.updateSleepData($routeParams.sleepDataItem, sleepData)
  .then((resolve) => {
    $location.url('#!/getData');
  });
};
});
