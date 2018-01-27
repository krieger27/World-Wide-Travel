'use strict';

angular.module("bookApp", ["ngRoute"]);
.config($routeProvider => {
    $routeProvider
        .when("/", {
            templateUrl: "partials/guides.html",
            controller: "bookCtrl"
        })
        .otherwise("/");
});