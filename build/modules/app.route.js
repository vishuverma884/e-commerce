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
            $urlRouterProvider.otherwise('/');
            $stateProvider.state('home',{
                url:'',
                templateUrl:'views/home.main.view.html'
            });
    }]);
    /*STOP parent router config*/
})();