'use strict';

app.Services.
    factory('usersRegistry', ['$http', '$q', function ($http, $q) {
        return{
            apiPath: '/users',
            post: function (params) {
                //Creating a deferred object
                var deferred = $q.defer();

                //Calling Web API to fetch shopping cart items
                $http.post(this.apiPath, params, {cache: false}).success(function (data) {
                    //Passing data to deferred's resolve function on successful completion
                    deferred.resolve(data);
                }).error(function () {
                        //Sending a friendly error message in case of failure
                        deferred.reject("An error has occurred");
                    });
                //Returning the promise object
                return deferred.promise;
            }
        }
    }]);