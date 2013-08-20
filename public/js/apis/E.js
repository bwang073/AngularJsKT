var app = angular.module('myModule', [], angular.noop);

app.directive('ysBlock', function() {
	return {
		template : '<div style="width: 200px; border: 1px solid black;">' +
						'<h1 style="background-color: gray; color: white; font-size: 22px;">{{ title }}</h1>' + 
						'<div>{{ text }}</div>' +
					'</div>',
		replace : true,
		scope : {
			title : '=title',
			text : '=text'
		},
		restrict : 'E'
	};
});

app.controller('ACtrl', function($scope) {
	$scope.title = 'This is title.';
	$scope.text = 'This is content.';
});