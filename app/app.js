'use strict';
var app = angular.module("ngo", ['ngRoute', 'datatables', 'datatables.bootstrap']);//, 'ui.bootstrap'

app.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);