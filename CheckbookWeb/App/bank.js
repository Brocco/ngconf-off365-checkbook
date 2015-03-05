angular.module('checkbook-bank', [])
    .controller('bankCtrl', function () {
        this.search = function() {
            this.searchedOn = this.searchAmt;
            this.showSearchResults = true;
            this.results = [
                { date: '1/1/2015', desc: 'ng-conf ticket' },
                { date: '1/2/2015', desc: 'ng-conf hotel reservation' },
                { date: '1/2/2015', desc: 'ng-conf flight' }
            ];
        }
        
    });
