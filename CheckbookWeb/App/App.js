/* Common app functionality */

(function () {
    "use strict";

    angular.module('checkbook', [
        'ngMaterial',
        'checkbook-add',
        'checkbook-bank'
    ]);

    Office.initialize = function (reason) {
        $(document).ready(function () {
            angular.bootstrap($('#app-container', ['checkbook']));
        });
    };
})();