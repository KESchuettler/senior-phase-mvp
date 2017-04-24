angular.module('tenKDay', [
  'tenKDay.services',
  'tenKDay.users',
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/users/users.html',
      controller: 'UsersController'
    })
    .otherwise({
      redirectTo: '/'
    })
})
