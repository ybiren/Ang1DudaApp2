dudaApp.controller("headerCtrl", ['$scope', '$http', 'httpSvc', '$compile', 'realSvc', '$localStorage', '$window', function ($scope, $http, httpSvc, $compile, realSvc, $localStorage, $window) {

	 let profileArr = [];
	 

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
	
	  $scope.CreateProfile = function (currProf,notAddTols) {

	  	var profileEl = angular.element(`<profile-dir>`);
		  profileEl.attr('bio',  currProf.bio );
		  profileEl.attr('full', currProf.full);
	    $('#contentSec').append(profileEl);
		  $compile(profileEl)($scope);

		  if (notAddTols === undefined) {
			  alert(notAddTols);
		  	let profArr = [];
			  if ($localStorage.profArr !== undefined) {
				  profArr = JSON.parse($localStorage.profArr);
			  }
			  profArr.push(currProf);
			  $localStorage.profArr = JSON.stringify(profArr);
		  }

		  httpSvc.get("http://graph.facebook.com/" + currProf.fbprof + "/pictures").then(function (profPic) {
	  		$scope.profPic = profPic.data;
	  		alert(angular.toJson(profPic.data));
	  	});



	  }

	  if ($localStorage.profArr !== undefined) {
	  	let profArr = JSON.parse($localStorage.profArr);
		  profArr.forEach(function(prof) {
			  $scope.CreateProfile(prof,true);
		  });
	  }

	//start from here
	 httpSvc.get("http://duda-api-test.herokuapp.com/profiles")
		  .then(function(linkDat) {
			  $scope.linkDat = linkDat.data;
	 });
	



}]);