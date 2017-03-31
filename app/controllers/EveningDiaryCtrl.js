"use strict";
app.controller('EveningDiaryCtrl', function ($scope, SleepDataFactory) {

$scope.Button = "Save";

$scope.sleepData = {
  TOD: "evening"
};
$scope.sleepData.date = new Date();

 $scope.postSleepData = function (sleepData) {


  console.log('You clicked ng-click');
  SleepDataFactory.postSleepData(sleepData);

   /* body... */
 };


});
