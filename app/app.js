'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.version',
    'ngAnimate',
    'ngMaterial'
]);

app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/view1'});
}]);

app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey', {
            'default': '900',
            'hue-1': '900',
            'hue-2': '800',
            'hue-3': '700'
        })
        .accentPalette('lime').dark();
    $mdThemingProvider.theme('chart')
        .primaryPalette('blue-grey', {
            'default': '600',
            'hue-1': '900',
            'hue-2': '900',
            'hue-3': '700'
        }).accentPalette('lime').dark();
    $mdThemingProvider.theme('director')
        .primaryPalette('blue-grey', {
            'default': '800',
            'hue-1': '500',
            'hue-2': '500',
            'hue-3': '500'
        }).accentPalette('lime').dark();
    $mdThemingProvider.theme('operator')
        .primaryPalette('grey', {
            'default': '900',
            'hue-1': '500',
            'hue-2': '500',
            'hue-3': '500'
        }).accentPalette('green').dark();
});