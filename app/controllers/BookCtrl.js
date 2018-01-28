'use strict';

angular.module("bookApp").controller("BookCtrl", function ($scope, GuideFactory) {
    GuideFactory.getGuides()
        .then((guideData) => {
            $scope.allGuides = guideData.data.guides;
        });
});