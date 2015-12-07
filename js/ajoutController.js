var app = angular.module('app');

var ajoutController = function($http, $scope, $state) {
  var $this = this;


  $http.get("/gestion_ventes/api/secteur.php").then(function(response) {
    $this.secteurs = response.data;
  })
  
var dataSecteurs = [];  

  $this.ajoutProjet = function() {
		if($this.secteur== undefined){
	  $this.data = {
	    "nom_project" : $this.projetName,
	  }
	  
	 
	  
		  $http({
			    method: 'POST',
			    url: "/gestion_ventes/api/addProject.php",
			    data: $this.data,
			    headers: {'Content-Type': 'application/json'}
			}).then(function(response){
	         $state.go("projets", {}, {reload: true});
		  })
		} else {



		for (var i=0; i< $this.secteur.length; i++) {
			dataSecteurs.push($this.secteur[i].id_secteur);
		}
	  $this.data = {
	    "nom_project" : $this.projetName,
	    "id_secteur" : dataSecteurs
	  }



		  $http({
			    method: 'POST',
			    url: "/gestion_ventes/api/addProject.php",
			    data: $this.data,
			    headers: {'Content-Type': 'application/json'}
			}).then(function(response){
	$state.go("projets", {}, {reload: true});
		  })
		}
	}
}
app.controller('ajoutController', ajoutController);
