var CallListController = angular.module('CallListController', []);

CallListController.controller('CallListController', [
    '$scope',
    'CallsService',
    function ($scope, CallsService) {
        CallsService.getAllCalls().then(function (data) {
            $scope.calls = data;
        });
    }]);

