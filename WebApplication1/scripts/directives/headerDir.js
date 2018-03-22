dudaApp.directive("headerDir", [function () {

	return{
		templateUrl: 'scripts/templates/header.html',
		controller: 'headerCtrl',
		link:function(scope, elem, attr,ctrl) {
			elem.mouseover(function() {
				scope.$apply(function() {
					scope.isMouse = "OVER!!!!";
				});
			});

			elem.mouseout(function () {
				scope.$apply(function () {
					scope.isMouse = "OUT!!!!";
				});
			});

			elem.bind("click1", function () {
				alert(elem.prop("tagName"));
				scope.$apply(function () {
					scope.isAfterClick = !scope.isAfterClick;
					scope.isMouse = "CLICK!!!!";

					alert(scope.call);
					ctrl.call();
				});
			});



		}

	}
}
]);