(function(){
    var utils = angular.module('utils');
    /*START create common tools here*/
    utils.service('tool',function(){
        //check the validity of the object
        this.validObject = function(testObject){
            if(testObject==={}||testObject===null||testObject===''||testObject===[]||testObject===undefined){
                return false;
            }
            return true;
        };
    });
    /*STOP create common tools here*/
})();