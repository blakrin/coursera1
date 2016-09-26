(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope
                                              , $injector) {

  $scope.button = "Check If Too Much"
  // $scope.model1 = "test"
   $scope.testt= function(){
     splitstring($scope.model1,",");
   }

  function splitstring(string, separator){
    var result
    if (string === undefined || string === null) {
      $scope.resulta = "Please enter data first"
    }else{
      var trimstring = string.trim();
      result  = trimstring.split(separator);
    }
    if (result.length <= 3 && result.length > 0) {
      $scope.resulta = "Enjoy !!!"
      console.log(result);
      console.log(result.length);
    }else if (result.length > 3) {
      $scope.resulta= "Too Mush"
      console.log(result);
      console.log(result.length);
    }
  }
});
})();
