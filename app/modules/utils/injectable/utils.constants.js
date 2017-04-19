(function(){
    var utils = angular.module('utils');
    /*START declare constants for the application*/
    //base_url to access base of the url
    utils.constant('base_url',{
        //ROR Url for dev environment
        'ror_dev':'https://nhd.b2c.humarashop.com/api/v4/'
    });

    //configurable items in the application
    utils.constant('config',{
        'productLimit':20
    });
    /*STOP declare constants for the application*/
})();