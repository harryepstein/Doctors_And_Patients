"use strict";
app.controller('MorningDiaryCtrl', function ($scope, SleepDataFactory, $location) {

$scope.Button = "Save";


$scope.sleepData = {
  TOD: "morning"
};

$scope.sleepData.date = new Date();

 $scope.postSleepData = function (sleepData) {

  SleepDataFactory.postSleepData(sleepData) .then ((sleepData) =>{


  $location.url("/getData");
  });
};



});
// let printDoctors = function () {
//   HospitalFactory.getDoctors()
//   .then((doctorData) => {
//     console.log("doctorData", doctorData)
//     console.log(Object.keys(doctorData.data));
//     $scope.doctors = doctorData.data;

//     for (let i = 0; doctorData.data.length < i; i++){
//       doctorData[i] =
//     }
//   })
  /* body... */
