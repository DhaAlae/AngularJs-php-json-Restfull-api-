var app = angular.module('app');

var userControler = function($http, $scope, $state, $location) {
  var $this = this;



$this.add = function() {
	
  $this.data = {
    "id" : $this.id,
    "pass" : $this.pass
  }
  
	  $http({
		    method: 'POST',
		    url: "/gestion_ventes/api/adduser.php",
		    data: $this.data,
		    headers: {'Content-Type': 'application/json'}
		}).then(function(response){
	$state.go("settings.ajouteruser", {}, {reload: true});
	  })
}



}
app.controller('userControler', userControler);
