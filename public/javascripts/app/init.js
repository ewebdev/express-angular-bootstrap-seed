'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('app', ['app.filters', 'app.services', 'app.directives', 'app.controllers']).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {templateUrl: '/partials/home.html', controller: 'Home'});
        $routeProvider.otherwise({redirectTo: '/'});
    }]);

app.Filters = angular.module('app.filters', []);
app.Services = angular.module('app.services', []);
app.Directives = angular.module('app.directives', []);
app.Controllers = angular.module('app.controllers', []);