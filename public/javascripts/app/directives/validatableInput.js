'use strict';

app.Directives.
    directive('wValidatableField', function () {
        return {
            restrict: 'A',
            transclude: true,
            scope: {
                wField: '=',
                wErrorTitle: '@',
                highlight: '@'
            },
            replace: false,

            link: function linkFn(scope, element, attrs) {
                var $el = $(element);

                var highlight = function () {
                    var $marks = $el.find('.validation-marks');
                    $marks.show().addClass('animated bounce')
                        .onTransitionEnd(function () {
                            this.removeClass('animated bounce');
                        }, $marks, 1200);
                };

                scope.$on('formRejected', function () {
                    if ($el.find('input').is('.ng-invalid')) {
                        highlight();
                    }
                });

            },

            template: '<label ng-transclude><div class="validation-marks ng-cloak" ng-show="wField.$dirty"> \
                <div class="invalid-mark icon-minus" ng-show="wField.$invalid" title="{{wErrorTitle}}"></div> \
                            <div class="valid-mark icon-ok" ng-show="!wField.$invalid"></div> \
                        </div></label>'
        };
    });
