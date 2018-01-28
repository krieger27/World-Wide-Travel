'use strict';

angular.module("bookApp").factory("GuideFactory", function ($q, $http) {

    let getGuides = () => {
        return $q((resolve, reject) => {
            $http
            .get("../../data/guides.json")
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