'use strict';

angular.module("bookApp").controller("bookCtrl", function ($scope, guideFactory) {
    guideFactory.getGuides()
        .then((guideData) => {
            $scope.allGuides = guideData.data.guides;

        });
});