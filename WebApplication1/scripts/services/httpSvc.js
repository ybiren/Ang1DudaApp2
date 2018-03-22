dudaApp.factory('httpSvc',
[
	'$http','$q', function ($http,$q) {
		var val = "";
		return {
			get: function (url) {
				var defer = $q.defer();
				$http({
					method: 'GET',
					url: url
				}).then(function (data) {
					defer.resolve(data);
				});
				return defer.promise;
			},

			setVal: function(val1) {
				val = val1;
			}, 

		  getVal: function() {
			  return val;
		  }


		}

	}
]);