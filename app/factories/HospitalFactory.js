"use strict"

app.factory("HospitalFactory", function($q, $http, FBCreds){

  let getPatients = function(docId){
    let patients = [];
    return $q((resolve, reject) => {
      $http.get(`${FBCreds.databaseURL}/patients.json?orderBy="doctorId"&equalTo="${docId}"`)
      .then( (patientsList) => {
        console.log(patientsList);
        resolve(patientsList);
      })
      .catch( (error) => {
        reject(error);
      })
    });
  };

  let getDoctors = function(){
    let doctors = []
    return $q((resolve, reject) => {
      $http.get(`${FBCreds.databaseURL}/doctors.json`)
      .then( (doctorsList) => {
        console.log(doctorsList);
        Object.keys(patientObj).forEach( (key) => {
          patientObj[key].doctorId = key;
          patients.push(patientObj[key]);
        })
        resolve(doctorsList);
      })
      .catch( (error) => {
        reject(error);
      })
    });
  };

  let postToFB = function(personObj){
    return $q((resolve, reject) => {
      $http.post(`${FBCreds.databaseURL}/doctors.json`)
      .then( (data) => {
        resolve(data)
      })
    });
  }

  return {getPatients, getDoctors, postToFB};

});
