// 'use strict';

// app.controller('loginController', function($scope, $http){
//  var $this = $this;
// 	  $scope.valid = false;

  	  

// 	$scope.login =function(){
// 		$http.get("/medzz/webapi/user").then(function(response){
//           $this.users = response.data;

//           angular.forEach($this.users, function(user) {
// 			if(user.id == log.id){
// 				if(user.pass == log.pass){
// 					$location.path("/dashbord");
// 				}
// 			} else {
				
// 					valid = true;
			
// 			}

// 		})


//            })

		

// 	}

// });



var app = angular.module('app');

var loginController = function($http, $scope, $state, $location) {
  var $this = this;

  $scope.valid = false;

  	  $http.get("/gestion_ventes/api/user.php").then(function(response){
          $this.users = response.data;
           })



$scope.login = function() {
	
		angular.forEach($this.users, function(user) {
			if(user.id == $scope.id){
				if(user.pass == $scope.pass){
					$location.path("/dashbord");

				}
			} else {
					$scope.valid = true;
			}

		})
  
}



}
app.controller('loginController', loginController);
