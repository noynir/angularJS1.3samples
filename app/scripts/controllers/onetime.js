'use strict';

/**
 * @ngdoc function
 * @name samplesApp.controller:OnetimeCtrl
 * @description
 * # OnetimeCtrl
 * Controller of the samplesApp
 */
  angular.module('samplesApp').controller('OnetimeCtrl', ['$scope', function($scope){
  		//$scope.users=[];
  		$scope.addToList=function(){
        if(!$scope.users) $scope.users=[];
        $scope.users.push({name:$scope.name});
  		};
  }]);
