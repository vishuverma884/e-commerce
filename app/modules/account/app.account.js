(function(){
    //Declare Account Module
    var App = angular.module('account',['ui.router']);
    App.config(['$stateProvider',function($stateProvider){
        var sp = $stateProvider;

        // Route to Head inside Account
        sp.state('head',{
            url:'/account/head',
            templateUrl:'views/account.head.view.html'
        });

        // Route to Foot inside Account
        sp.state('foot',{
            url:'/account/foot',
            templateUrl:'views/account.foot.view.html'
        });
    }]);
})();