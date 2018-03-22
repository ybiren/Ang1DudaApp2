dudaApp.directive("profileDir",[function() {
	
	return{
	
		scope: { 'bio': '@', 'full': '@', 'funcTry':'&' },
		templateUrl: 'scripts/templates/profile.html'

	}

}])