'use strict';

angular.module("bookApp").factory("guideFactory", function ($q, $http) {

    let getGuides = () => {
        return $q((resolve, reject) => {
            $http
                .get("../guides.json")
                .then((guides) => {
                    resolve(guides);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    };
    return { getGuides };
});