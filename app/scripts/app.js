'use strict';

/**
 * @ngdoc overview
 * @name samplesApp
 * @description
 * # samplesApp
 *
 * Main module of the application.
 */
angular
  .module('samplesApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider,$locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/onetime', {
        templateUrl: 'views/onetime.html',
        controller: 'OnetimeCtrl'
      })
      .when('/forms', {
        templateUrl: 'views/forms.html',
        controller: 'FormsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode({
        enabled:true,
        requireBase:false
      });
  });
