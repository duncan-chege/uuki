var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/rawhoney-details/manuka');
    $stateProvider
        .state('raw-honey', {
            url: '/rawhoney-details/manuka',
            templateUrl: 'rawhoney-details/manuka.html'
        })
        .state('flavoured-honey', {
            url: '/flavouredhoney-details/mango',
            templateUrl: 'flavouredhoney-details/mango.html'
        })
        .state('honey-products', {
            url: '/honeyproduct-details/candy',
            templateUrl: 'honeyproduct-details/candy.html'
        })
        .state('manuka', {
            url: '/rawhoney-details/manuka',
            templateUrl: 'rawhoney-details/manuka.html'
        })
        .state('alfalfa', {
            url: '/rawhoney-details/alfalfa',
            templateUrl: 'rawhoney-details/alfalfa.html'
        })
        .state('eucalyptus', {
            url: '/rawhoney-details/eucalyptus',
            templateUrl: 'rawhoney-details/eucalyptus.html'
        })
        .state('acacia', {
            url: '/rawhoney-details/acacia',
            templateUrl: 'rawhoney-details/acacia.html'
        })
        .state('buckwheat', {
            url: '/rawhoney-details/buckwheat',
            templateUrl: 'rawhoney-details/buckwheat.html'
        })
        .state('clover', {
            url: '/rawhoney-details/clover',
            templateUrl: 'rawhoney-details/clover.html'
        })
        .state('candy', {
            url: '/honeyproduct-details/candy',
            templateUrl: 'honeyproduct-details/candy.html'
        })
        .state('lollipop', {
            url: '/honeyproduct-details/lollipop',
            templateUrl: 'honeyproduct-details/lollipop.html'
        })
        .state('chocolate', {
            url: '/honeyproduct-details/chocolate',
            templateUrl: 'honeyproduct-details/chocolate.html'
        })
        .state('ginger', {
            url: '/honeyproduct-details/ginger',
            templateUrl: 'honeyproduct-details/ginger.html'
        })
        .state('syrup', {
            url: '/honeyproduct-details/syrup',
            templateUrl: 'honeyproduct-details/syrup.html'
        })
        .state('peanutbutter', {
            url: '/honeyproduct-details/peanutbutter',
            templateUrl: 'honeyproduct-details/peanutbutter.html'
        })
        .state('cinnamon', {
            url: '/flavouredhoney-details/cinnamon',
            templateUrl: 'flavouredhoney-details/cinnamon.html'
        })
        .state('creamy-ginger', {
            url: '/flavouredhoney-details/ginger',
            templateUrl: 'flavouredhoney-details/ginger.html'
        })
        .state('habanero', {
            url: '/flavouredhoney-details/habanero',
            templateUrl: 'flavouredhoney-details/habanero.html'
        })
        .state('lemon', {
            url: '/flavouredhoney-details/lemon',
            templateUrl: 'flavouredhoney-details/lemon.html'
        })
        .state('mango', {
            url: '/flavouredhoney-details/mango',
            templateUrl: 'flavouredhoney-details/mango.html'
        })
        .state('rasberry', {
            url: '/flavouredhoney-details/rasberry',
            templateUrl: 'flavouredhoney-details/rasberry.html'
        })
});