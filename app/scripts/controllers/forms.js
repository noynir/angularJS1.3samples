'use strict';

/**
 * @ngdoc function
 * @name samplesApp.controller:FormsCtrl
 * @description
 * # FormsCtrl
 * Controller of the samplesApp
 */
angular.module('samplesApp')
  .controller('FormsCtrl', function ($scope,$log) {

  	this.submitForm=function(regForm){
      $log.log($scope.currentUser);
      if(regForm.$invalid) return;


  	};
  });

angular.module('samplesApp')
  .directive('gmailValidate', function () {
      return {
        require:'ngModel',
        link:function($scope,element,attrs,ngModel){
          ngModel.$validators.gmail=function(value){
            var valid=true;
            var suffix="gmail.com";
            if(value){
              valid=value.toLowerCase().indexOf(suffix, value.length - suffix.length) !== -1;
            }
            return valid;
          }

        }
      }

  });
angular.module('samplesApp')
  .directive('emailExists', function ($http) {
    return {
      require:'ngModel',
      link:function($scope,element,attrs,ngModel){
        ngModel.$asyncValidators.emailExists=function(value){
          return $http.get("/checkuser?email="+value);
        }

      }
    }

  });
