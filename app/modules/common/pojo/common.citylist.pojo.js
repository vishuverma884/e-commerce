(function(){
    var common = angular.module('common');
    /*START create citylist POJO object*/
    // Empty Shell of City List Object
    var CityListShell = function(){
        // members of citylist pojo object
        this.list = {};

        // get city list
        CityListShell.prototype.getCityList = function(){
            return this.list;
        };

        // set city list
        CityListShell.prototype.setCityList = function(list){  
            var cVm = this;        
            angular.forEach(list,function(value,key){ 
                cVm.list[value.cityid] = value.city;
            });
        };
    };
    /*STOP create citylist POJO object*/

    common.factory('citylist',function(){
        var cityFactory = {
            'getPojo':function(){
                return new CityListShell();
            }
        };
        return cityFactory;
    });
    
})();