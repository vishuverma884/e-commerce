(function(){
    var utils = angular.module('utils');
    /*START remoteCall layer to fetch data from API*/
    utils.service('remoteCall',
    [
        '$http',
        '$q',
        'base_url',
        'citylist',
        'config',
        function(
            $http,
            $q,
            base_url,
            citylist,
            config
        ){

        /*START Store setup related API Calls*/
        //fetch the city list
        this.getCities = function(){
            var q = $q.defer();
            //Http Call to fetch the cities
            $http.get(base_url.ror_dev+'location/citieslist').then(function(response){
                //create a POJO instance of city
                var city_pojo = citylist.getPojo();
                //set the city pojo from the response
                city_pojo.setCityList(response.data.cities);
                q.resolve(city_pojo);
            },function(error){
                //reject the error
                q.reject(error);
            });
            return q.promise;
        };
        /*STOP Store setup related API Calls*/

        /*START Product Listing ROR API Calls*/
        this.productListing = function(store_id,cat_1,cat_2,cat_3){
            var q = $q.defer();
            store_id = '32102359';
            cat_1 = 'CAT00004SNACKS_PANTRY';
            cat_2 = 'CAT00015CHOCOLATES_SWEETS';
            cat_3 = 'CAT00106INDIAN_SWEETS';
            //Http Call to fetch the product list
            $http.get(base_url.ror_dev+'products/'+store_id+'/order/discount?hierarchy1='+cat_1+'&hierarchy2='+cat_2+'&hierarchy3='+cat_3+'&limit='+config.productLimit).then(function(response){
                console.log('Product List: ',response);
                q.resolve(response.data.productlist);
            },function(error){
                //reject the error
                q.reject(error);
            });
            return q.promise;
        };
        /*STOP Product Listing ROR API Calls*/
    }]);
    /*STOP remoteCall layer to fetch data from API*/
})();