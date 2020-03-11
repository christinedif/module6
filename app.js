(function (){
  'use strict';
angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject=['$scope'];

function LunchCheckController($scope){

  $scope.finalMessage='';
  $scope.finalColor={'color': 'black'};


$scope.displayMessage=function(){
  var arr=findMessage($scope.dishes)
  var message=arr[0]
  var color=arr[1]
  $scope.finalMessage=message;
  $scope.finalColor=color;
  console.log($scope.finalColor)


};


function findMessage(dishes){
var message=""
var color=""
console.log(dishes);

if (dishes==undefined || dishes==""){
    console.log(dishes)
    message  = "Please enter data first.";
    color={'color':'red', 'border':'1px solid red'};
}
else{
  var dishes2=dishes.split(',');

  dishes2= dishes2.filter(function( element ) { return /\S/.test(element); });
  console.log(dishes2.length);
  if (dishes2.length<=3){
    message= "Enjoy!";
    color={'color':'green', 'border':'1px solid green'};
  }
  else {
    message= "Too much!";
    color={'color':'red', 'border':'1px solid red'};
  }
}
console.log(message);
return [message,color];

};
};



})();
