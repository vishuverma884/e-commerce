(function(){
    //START binding all the parent modules to the main module
    angular.module('app',[
        //internal modules
        'account',
        'cart',
        'checkout',
        'common',
        'detail',
        'home',
        'list',
        'utils',
        //dependencies
        'ui.router'
    ]);
    //STOP binding all the parent modules to the main module
})();