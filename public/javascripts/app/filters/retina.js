'use strict';

app.Filters.
    filter('retina', function () {
        var isRetina = window.devicePixelRatio >= 2,
            attrs = ['src', 'background-image', 'background'];

        return isRetina ?

            function (i) {
                return i;
            } :

            function (url) {
                var obj, attrName, src;

                if (angular.isObject(url)) {
                    obj = url;
                    $.each(attrs, function (i, a) {
                        if (angular.isString(obj[a])) {
                            attrName = a;
                            src = obj[a];
                            return false;
                        }
                    });
                } else if (angular.isString(url)) {
                    src = url;
                }

                if (src !== undefined) {
                    var s = src.split('.');
                    if (s.length >= 2) {
                        s[s.length - 2] += '@2x';
                    }
                    src = s.join('.');

                    if (attrName) {
                        url[attrName] = src;
                    } else {
                        url = src;
                    }
                }
                return url;
            };
    });