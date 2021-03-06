'use strict';
/* Configuration of other Modules */
angular.module('LocalStorageModule')
        .value('prefix', 'ballbotsche')
        ;

angular.module('services.navigation.config')
        .value('NAVIGATION_CONFIG', {
            loginState: 'login',
            errorState: 'error'
        })
        ;

angular.module('ballbotsche', [
    'ui.router',
    'ngCookies',
    'LocalStorageModule',
    'services.authentication',
    'services.navigation',
    'services.navigation.config']
        )
        .config(function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise("/dashboard");

            $stateProvider
                    .state('login', {
                        url: "/login",
                        templateUrl: "partials/login.html",
                        controller: 'LoginCtrl'
                    }).state('dashboard', {
                url: '/dashboard',
                templateUrl: 'partials/dashboard.html',
                controller: 'DashboardCtrl',
                
            })
        });