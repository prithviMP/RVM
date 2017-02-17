

  // create the module and name it app
  var app = angular.module('myApp', ['ngRoute']);

  // configure our routes
  app.config(function($routeProvider) {
    $routeProvider

      // route for the home page
      .when('/', {
        templateUrl : 'view/home.html',
        controller  : 'mainController'
      })

      // route for the about page
      .when('/about', {
        templateUrl : 'view/about.html',
        controller  : 'aboutController'
      })
       // route for the about page
      .when('/service', {
        templateUrl : 'view/service.html',
        controller  : 'mainController'
      })

      // route for the contact page
      .when('/contact', {
        templateUrl : 'view/contact.html',
        controller  : 'mainController'
      })
    
	    // route for the project  page
	    .when('/project', {
	      templateUrl : 'view/contact.html',
	      controller  : 'mainController'
	    });
    
    
  });

  // create the controller and inject Angular's $scope
  app.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'test';
  });

  