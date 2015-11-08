var CallsService = angular.module('CallsService', []);

CallsService.factory('CallsService', ['$http','$q',
    function( $http, $q){
        return {
            getAllCalls: function () {
                var deferred = $q.defer();
                $http.get('/data/calls.json')
                    .success(function (data) {
                        deferred.resolve(data);
                    }).error(function (data) {
                        deferred.reject(data);
                    });
                return deferred.promise;
            }
        };
    }]);

