"use strict"
 
var ngApp = angular.module('app', []);                      
        
ngApp.controller("HomeController", function($scope){
 
    $scope.title = "Hello Angular";
 
});