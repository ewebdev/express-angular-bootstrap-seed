!function ($) {

    "use strict"; // jshint ;_;

    var transEndEventNames = {
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'msTransition': 'MSTransitionEnd',
        'transition': 'transitionend'
    };
    Modernizr.transitionEnd = transEndEventNames[ Modernizr.prefixed('transition') ];
    $.fn.onTransitionEnd = function (callback, scope, verifyCallbackAfterMs) {
        return this.each(function () {
            var deferred = $.Deferred(),
                $el = $(this);
            deferred.then(function () {
                setTimeout($.proxy(callback, scope || $el), 100);
            });
            if (!Modernizr.csstransitions) {
                deferred.resolve();
            } else {
                $el.one(Modernizr.transitionEnd, deferred.resolve);
                if (verifyCallbackAfterMs !== undefined) {
                    setTimeout(deferred.resolve, verifyCallbackAfterMs);
                }
            }
        });
    };

}(window.jQuery);