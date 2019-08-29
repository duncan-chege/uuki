var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/raw-honey');
    $stateProvider
    .state('raw-honey',{
        url: '/raw-honey',
        templateUrl: 'menu-views/raw-honey.html'
    })
    .state('flavoured-honey',{
        url: '/flavoured-honey',
        templateUrl: 'menu-views/flavoured-honey.html'
    })
    .state('honey-products',{
        url: '/honey-products',
        templateUrl: 'menu-views/honey-products.html'
    })
    .state('manuka',{
        url: '/honey-products/manuka',
        templateUrl: 'rawhoney-details/manuka.html'
    })
    .state('alfalfa',{
        // url: '/honey-products',
        templateUrl: 'rawhoney-details/alfalfa.html'
    })
    .state('eucalyptus',{
        // url: '/honey-products',
        templateUrl: 'rawhoney-details/eucalyptus.html'
    })
    .state('acacia',{
        // url: '/honey-products',
        templateUrl: 'rawhoney-details/acacia.html'
    })
    .state('buckwheat',{
        // url: '/honey-products',
        templateUrl: 'rawhoney-details/buckwheat.html'
    })
    .state('clover',{
        // url: '/honey-products',
        templateUrl: 'rawhoney-details/clover.html'
    })

});