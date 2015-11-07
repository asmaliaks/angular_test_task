var AddCallController = angular.module('AddCallController', []);

AddCallController.controller('AddCallController', ['$scope',
    function ($scope) {
        $scope.calls = 'new call';
    }]);