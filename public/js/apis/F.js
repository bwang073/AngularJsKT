var app = angular.module('myModule', [ 'ngResource' ]);

app.controller('ACtrl', [ '$scope', '$resource', function($scope, $resource) {
	var Employee = $resource('/dao/:action/employee');
	//Initial the employee list.
	queryEmployees();
	//Save new record.
	$scope.saveEmp = function() {
		Employee.save({action: "save"}, $scope.emp, function(){
			//Refresh the records.
			queryEmployees();
		});
	};
	
	function queryEmployees(){
		$scope.employees = Employee.query({action: "query"});
	}
} ]);