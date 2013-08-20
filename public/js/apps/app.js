'use strict';

/* App Module */

angular.module('myModule', [ 'ngResource', 'myServicesModule', 'myDirctivesModule', 'myFiltersModule' ]).config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/1', {
		templateUrl : 'in1',
		controller : 'ACtrl'
	}).when('/2/:msg', {
		templateUrl : 'in2',
		controller : 'BCtrl'
	}).otherwise({
		redirectTo : '/1'
	});
} ]);