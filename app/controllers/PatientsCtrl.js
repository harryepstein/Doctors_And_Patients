"use strict"

app.controller("PatientsCtrl", function($scope, HospitalFactory){

$scope.patients = [];

$scope.printPatients = function(){
  HospitalFactory.getPatients()
  .then( (patientsData) => {
    console.log("patientsData: ", patientsData)

    let patientsData13 = patientsData.data

    let keys = [];
    patientsData13.forEach(function(object){
      keys.push(Object.keys(object)[0]);
    })

    for(var i = 0; i < keys.length; i++){
      $scope.patients.push(patientsData13[i][keys[i]])
    }
    console.log($scope.patients)
  })
}

})
