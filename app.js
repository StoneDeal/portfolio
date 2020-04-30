var portfolioApp = angular.module('portfolioApp', ['ngRoute', 
'ngResource']);

//Routes
portfolioApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    
    .when('/wordpress', {
        templateUrl: 'pages/second.html',
        controller: 'homeController'
    });
    
});

//Services
/*
portfolioApp.service('cityService', function() {

    this.city = "New York, NY";

});
*/

//Controllers
portfolioApp.controller('homeController', ['$scope',
function($scope) {


}]);
