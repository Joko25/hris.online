'use strict';
var app = angular.module("ngo", ['ngRoute', 'datatables', 'datatables.bootstrap']);//, 'datatables.fixedcolumns''datatables.scroller', 'ui.bootstrap'

app.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);