"use strict";
app.controller('retrieveDataCtrl',  function( SleepDataFactory, $scope){

console.log( 'inside retrieveDataCtrl ');

getSleepData();


// $scope.sleepData;
function getSleepData(){
  $scope.sleepData = [];

  SleepDataFactory.getSleepData()
    .then((SleepDataList) => {
    var itemCollection = SleepDataList.data;

          Object.keys(itemCollection).forEach(function(key){
            itemCollection[key].id=key;
            $scope.sleepData.push(itemCollection[key]);
            // sleepObjects.push(itemCollection[key]);

            // console.log("$scope.sleepData", $scope.sleepData);


          });

});
}






  $scope.deleteSleepData = function( SleepDataId){
    SleepDataFactory.deleteSleepData(SleepDataId)
    .then((response) => {
  SleepDataFactory.getSleepData()
  //it returns a promise
      .then((sleepData) => {
       console.log("This is after delete sleepData:", sleepData);
    $scope.sleepData = sleepData.data;
      });
    });
  };
  /* body... */

});
