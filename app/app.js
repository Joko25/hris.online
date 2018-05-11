'use strict';
var app = angular.module("ngo", ['ngRoute']);//, 'ui.bootstrap'

app.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);