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
      },
      {
        'title': 'Contact',
        'link': 'http://www.meetup.com/Philadelphia-JavaScript-Developers/suggestion/'
      }
    ];

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
