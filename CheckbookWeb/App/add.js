(function () {
  angular.module('checkbook-add', [])
    .controller('addCtrl', function () {
      this.addTrans = function () {

      };
      this.types = [
        { name: 'deposit', action: 'credit' },
        { name: 'withdrawal', action: 'debit' }
      ];

    });
})();