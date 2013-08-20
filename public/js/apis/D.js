function ACtrl($scope) {
	$scope.toggleMsg = function() {
		if ($scope.msg) {
			$scope.msg = "";
		} else {
			$scope.msg = "This is a click event!";
		}
	};

	document.getElementById('mybtn').onclick = function() {
		if ($scope.jqmsg) {
			$scope.jqmsg = "";
		} else {
			$scope.jqmsg = "This is a click event!";
		}
	};

}
