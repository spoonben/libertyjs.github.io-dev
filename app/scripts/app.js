'use strict';

angular.module('libertyjsdotcomApp', [
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home',
        controller: 'HomeCtrl'
      })
      .when('/schedule', {
        templateUrl: 'partials/schedule',
        controller: 'ScheduleCtrl'
      })
      .when('/about', {
        templateUrl: 'partials/about',
        controller: 'AboutCtrl'
      })
      .when('/tickets', {
        templateUrl: 'partials/tickets',
        controller: 'TicketsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
