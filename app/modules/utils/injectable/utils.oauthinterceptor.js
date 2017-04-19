(function(){
    var utils = angular.module('utils');
    utils.factory('oauthInject',function(){
        var oauthInject = {
            request:function(config){
                if(config.url.indexOf('v4')>-1){
                    var _temp = [];
                    if(config.url.indexOf('?')>-1){
                        _temp = config.url.split('?');
                        config.url = _temp[0];
                    }
                    var oauth = OAuth({
                    consumer: {
                        key: 'BMPBJL1O',
                        secret: '2FMOHJPXXLCCDCPUWXQRPJEI'
                    },
                    signature_method: 'HMAC-SHA1',
                        hash_function: function(base_string, key) {
                            return CryptoJS.HmacSHA1(base_string, key).toString(CryptoJS.enc.Base64);
                        }
                    });
                    var request_data = {
                        url: config.url,
                        method: config.method
                    };
                    config.params = oauth.authorize(request_data);
                    if(_temp.length>1){
                        config.url += '?'+_temp[1];
                    }
                }                
                return config;
            }
        };
        return oauthInject;
    });
})();