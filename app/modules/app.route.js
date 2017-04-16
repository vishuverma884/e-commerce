(function(){
    var App = angular.module('app');
    /*START parent router config*/
    App.config([
            '$urlRouterProvider',
            '$stateProvider',
        function(
            $urlRouterProvider,
            $stateProvider
        ){            
            var sp = $stateProvider;
            $urlRouterProvider.otherwise("/"); 

            // Route to state Home
            sp.state('home',{
                url:'',
                templateUrl:'views/home.main.view.html'
            });

            // Route to state Account
            sp.state('account',{
                url:'/account',
                templateUrl:'views/account.main.view.html'
            });
    }]);
    /*STOP parent router config*/
})();