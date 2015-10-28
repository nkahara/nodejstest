var myApp = angular.module('myApp', []);
myApp.controller("ProfileCtrl", function($scope, $http) {

	var refresh = function() {
		$http.get("/doGetUserDetails").success(function(response) {
			$scope.profile = response;
		});
	}

	refresh();

	$scope.UpdateProfile = function() {
		console.log("Updating details");
		$http.post("/doUpdateMyProfile", {name: $scope.profile.name, email: $scope.profile.email, phone: $scope.profile.phone}).success(function(response) {
			if (response != "INVALID") {
				console.log("updated data...");
				$scope.completed = true;
				$scope.message_bold = "Success!";
				$scope.message_content = "You have updated your profile information.";
				$scope.alert_type = "alert alert-success";
			} else {
				console.log("update data fail");
				$scope.completed = true;
				$scope.message_bold = "Failure!";
				$scope.message_content = "Your data was not updated.";
				$scope.alert_type = "alert alert-danger";
			}
		});

		refresh();
	};
});
myApp.controller("AppCtrl", function($scope, $http) {
	
	$scope.ClickMe = function() {
		console.log("Button clicked");
		$http.post("/doAsyncData").success(function(response) {
			if (response != "INVALID") {
				console.log(response);
				$scope.response = response;
				$scope.completed = true;
				$scope.message_bold = "Success!";
				$scope.message_content = "doAsyncData was successfull. [" + response + "]";

				$scope.alert_type = "alert alert-success";
			}  else {
				
				console.log(response);
				$scope.response = response;
				$scope.completed = true;
				$scope.message_bold = "Failure!";
				$scope.message_content = "doAsyncData was NOT successfull. [" + response + "]";

				$scope.alert_type = "alert alert-danger";
			};
		});
	}


	var refresh = function() {
		$http.get("/doTestFunc").success(function(response) {
			console.log("Refreshed Page2");

		});
	};



	refresh();

});