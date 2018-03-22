dudaApp.service('realSvc',
['httpSvc'
,function(httpSvc) {
		this.func = function() {
			alert("AAA=" + httpSvc.getVal());
		}
	}
]);