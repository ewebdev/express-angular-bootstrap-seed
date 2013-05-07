'use strict';

app.Filters.
    filter('first', function () {
        return function (arr, num) {
            return arr.slice(0, num);
        };
    });