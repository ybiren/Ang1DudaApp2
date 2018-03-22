dudaApp.controller("headerCtrl", ['$scope', '$http', 'httpSvc', '$compile', 'realSvc', function ($scope, $http, httpSvc, $compile, realSvc) {

	  this.call = function() {
	  	alert(httpSvc.getVal());
	  }
	
	  $scope.IsProfilePrivate = function (profId) {
	  	return ($scope.isShowPrivate === true) && (profId === $scope.currProf.id);
	  }

	  $scope.isAfterClick = false;

	/*
	  urls = ["http://duda-api-test.herokuapp.com/profiles", "http://duda-api-test.herokuapp.com/profiles"];
	  arrDat = ["", ""];
	  urls.forEach(function (url, ind) {
	  	httpSvc.get(url).then(function (dat) {
			  alert(ind);
	  		arrDat[ind] = dat;
		  });
		});
		*/
		
	  $scope.OnProfileSel = function() {
	  	httpSvc.get("http://duda-api-test.herokuapp.com/profile/" + $scope.profileSel).then(function (profDat) {
		  	$scope.currProf = profDat.data;
		  });
	  }

	  $scope.funcTry = function() {
		  alert("hello from func try");
	  }


	  $scope.CreateProfile = function () {
		  var profileEl = angular.element(`<profile-dir>`);
		  profileEl.attr('bio',  $scope.currProf.bio );
		  profileEl.attr('full', $scope.currProf.full);
		  profileEl.attr('funcTry', "funcTry()");


		  $('#contentSec').append(profileEl);
		  $compile(profileEl)($scope);
		  

		  httpSvc.get("http://graph.facebook.com/" + $scope.currProf.fbprof + "/pictures").then(function (profPic) {
	  		$scope.profPic = profPic.data;
	  		alert(angular.toJson(profPic.data));
	  	});
	  }
    
	  httpSvc.setVal("44");
	  realSvc.func();

	  $scope.call=function()
	  {
		  alert("called")
	  }


	  //start from here
	  httpSvc.get("http://duda-api-test.herokuapp.com/profiles").then(function (linkDat) {
	  	$scope.linkDat = linkDat.data;
	  });
}]);