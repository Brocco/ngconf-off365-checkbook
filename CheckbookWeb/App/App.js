/* Common app functionality */

(function () {
    "use strict";

    angular.module('checkbook', [
        'ngMaterial',
        'ngAnimate',
        'ngAria',
        'checkbook-add',
        'checkbook-bank'
    ]);

    Office.initialize = function () {
        angular.bootstrap($('#app-container'), ['checkbook']);
    };
})();