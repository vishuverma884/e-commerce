(function(){
    var common = angular.module('common');
    /*START store controller here*/
    common.controller('storeController',['remoteCall',function(remoteCall){
        // Initialize the variables
        var storeVm = this;
        // call the cities api from remoteCall library
        remoteCall.getCities().then(function(cityPojo){
            console.log('City List: ',cityPojo.list);  
            storeVm.citylist = cityPojo.list;  
        });

        //call the productListing api from remoteCall library
        remoteCall.productListing().then(function(productListPojo){
            console.log('List Fetched!..');
            storeVm.productList = productListPojo;
        });
        
    }]);
    /*STOP store controller here*/
})();