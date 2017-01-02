var app = angular.module('DoliumApp', 
    [
        'ngRoute', 
        'ngAnimate', 
        'ui.bootstrap', 
    ])

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        controller: 'HomeCtrl',
        templateUrl: 'templates/home.html',
    })

    $routeProvider.when('/EmpresaB', {
        controller: 'EmpresaCtrl',
        templateUrl: 'templates/empresa.html',
    })

});