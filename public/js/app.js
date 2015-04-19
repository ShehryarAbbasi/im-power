/* Copyright © 2015 I'm Power. All Rights Reserved. */ 

'use strict';

var myApp = angular.module('myApp', 
  [
    'ngRoute', 
    'ui.bootstrap', 
    'ngAnimate'
    ]);

  myApp.config([
    '$routeProvider', '$locationProvider',
    function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'partials/welcome.html'
        })
        .when('/home', {
          templateUrl: 'partials/welcome.html'
        })    
        .when('/profile', {
          templateUrl: 'partials/profile.html'
        })
        .when('/dashboard', {
          templateUrl: 'partials/dashboard.html',
        })
        .when('/coming-soon', {
          templateUrl: 'partials/comingsoon.html'
        })
        .otherwise({
          redirectTo: '/'
      });
    }]);
