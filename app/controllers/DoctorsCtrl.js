"use strict"

app.controller("DoctorsCtrl", function($scope, HospitalFactory){

$scope.doctors = [];

let printDoctors = function(){
  HospitalFactory.getDoctors()
  .then( (doctorData) => {
    console.log("doctorData: ", doctorData)

    let doctorData13 = doctorData.data

    let keys = [];
    doctorData13.forEach(function(object){
      keys.push(Object.keys(object)[0]);
    })

    for(var i = 0; i < keys.length; i++){
      $scope.doctors.push(doctorData13[i][keys[i]])
    }
  })
}

printDoctors();

})
