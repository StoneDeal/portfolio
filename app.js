var portfolioApp = angular.module('portfolioApp', ['ngRoute']);

//Routes
portfolioApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when("/", {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    
    .when("/wordpress", {
        templateUrl: 'pages/wordpress.html',
        controller: 'wordpressController'
    })

    .when("/tunetracker", {
        templateUrl: 'pages/tunetracker.html',
        controller: 'wordpressController'
    });
    
});

//Services
/*
portfolioApp.service('cityService', function() {

    

});
*/

//Controllers
portfolioApp.controller('homeController', ['$scope',
function($scope) {


}]);

portfolioApp.controller('wordpressController', ['$scope',
function($scope) {


}]);


