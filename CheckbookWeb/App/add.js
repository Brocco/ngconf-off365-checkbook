
angular.module('checkbook-add', [])
  .controller('addCtrl', function ($scope) {
      var spreadsheetData = [];
      var header = [];
      header.push('date');
      header.push('description');
      header.push('amount');
      header.push('Type');
      spreadsheetData.push(header);
      this.addTrans = function () {
          var self = this;
          var lineItem = [];
          lineItem.push(self.date);
          lineItem.push(self.description);
          lineItem.push(self.amount);
          lineItem.push(self.Type);
          spreadsheetData.push(lineItem);

          Office.context.document.bindings.addFromNamedItemAsync('A1:D' + spreadsheetData.length, 'matrix', { id: 'invoiceLineItems' }, function (asyncResult) {

              if (asyncResult.status == Office.AsyncResultStatus.Succeeded) {


                  self.date = '';
                  self.description = '';
                  self.amount = '';
                  self.Type = '';
                  $scope.$apply();

                  // add the data
                  Office.select('bindings#invoiceLineItems').setDataAsync(spreadsheetData, { coercionType: 'matrix' }, function (asyncResult) {
                  });
              }
          });
      };
      this.types = [
          'deposit', 'withdrawal'
      ];

  });