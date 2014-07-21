'use strict';

angular.module('libertyjsdotcomApp')
  .controller('NavbarCtrl', function ($scope, $location) {

    $scope.menu = [
      {
        'title': 'Home',
        'link': '/'
      },
      {
        'title': 'Schedule',
        'link': '/schedule'
      },
      // {
      //   'title': 'About',
      //   'link': '/about'
      // },
      {
        'title': 'Tickets',
        'link': '/tickets'
      }
    ];

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
