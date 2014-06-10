'use strict';


// Declare app level module which depends on filters, and services
var alertaApp = angular.module('alertaApp', [
  'ngRoute',
  'alertaFilters',
  'alertaServices',
  'alertaDirectives',
  'alertaControllers',
  'angularOauth'
])

alertaApp.config(['oauthConfigProvider', '$routeProvider',
  function(oauthConfigProvider, $routeProvider) {
    oauthConfigProvider
    .configure({
        authUrl: 'https://accounts.google.com/o/oauth2/auth',
        clientId: '670909444171-la87bi7biqd7bdhv9vq5r05d76mpstrb.apps.googleusercontent.com',
        clientSecret: 'Qg8kZMUhvpfrCyUiCwEhSWXr',
        verifyUrl: 'https://www.googleapis.com/oauth2/v1/tokeninfo'
    });
    $routeProvider
    .when('/alerts', {
      templateUrl: 'partials/alert-list.html',
      controller: 'AlertListController',
      reloadOnSearch: false
    })
    .when('/alert/:id', {
      templateUrl: 'partials/alert-details.html',
      controller: 'AlertDetailController'
    })
    .when('/top10', {
      templateUrl: 'partials/alert-top10.html',
      controller: 'AlertTop10Controller',
      reloadOnSearch: false
    })
    .when('/watch', {
      templateUrl: 'partials/alert-watch.html',
      controller: 'AlertWatchController'
    })
    .when('/about', {
      templateUrl: 'partials/about.html',
      controller: 'AboutController'
    })
    .otherwise({
      redirectTo: '/alerts'
    });
  }]);
