'use strict';

/**
 * @ngdoc function
 * @name samplesApp.controller:OnetimeCtrl
 * @description
 * # OnetimeCtrl
 * Controller of the samplesApp
 */
  angular.module('samplesApp').controller('OnetimeCtrl', ['$scope', function($scope){
  		$scope.name="Nir Noy";
  		$scope.users=[];
  		$scope.addToList=function(){
        $scope.users.push({name:$scope.name});
  		};
  }]);
