(function(){
    var App = angular.module('app');
    /*START parent router config*/
    App.config([
            '$urlRouterProvider',
            '$stateProvider',
            '$locationProvider',
            '$httpProvider',
        function(
            $urlRouterProvider,
            $stateProvider,
            $locationProvider,
            $httpProvider
        ){            
            var sp = $stateProvider;
            $httpProvider.interceptors.push('oauthInject');
            $urlRouterProvider.otherwise("/");             

            // Route to state Home
            sp.state('home',{
                url:'/',
                templateUrl:'views/home.main.view.html',
                controller:'storeController',
                controllerAs:'storeVm'
            });

            // Route to state Account
            sp.state('account',{
                url:'/account',
                templateUrl:'views/account.main.view.html'
            });

            $locationProvider.html5Mode(true);
    }]);
    /*STOP parent router config*/
})();