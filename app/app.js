'use strict';
var app = angular.module("ngo", ['ngRoute', 'datatables', 'datatables.bootstrap', 'lr.upload']);//, 'datatables.fixedcolumns''datatables.scroller', 'ui.bootstrap'

app.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);