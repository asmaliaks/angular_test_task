var NextCallController = angular.module('NextCallController', []);

NextCallController.controller('NextCallController', ['$scope',
    function ($scope) {
        $scope.nextCall = 'next call';
    }]);