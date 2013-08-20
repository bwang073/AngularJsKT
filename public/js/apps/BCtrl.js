angular.module('myModule').controller('BCtrl', [ '$scope', '$resource', '$routeParams', function($scope, $resource, $routeParams) {
	$scope.content = "This is in2.html";
	$scope.msg = $routeParams.msg;
} ]);