var app = angular.module('app');

var detailsSecController = function($http, $stateParams) {
  var $this = this;
  $this.dataSecteurs= [];

  $this.soussecteurse = [];
  $this.allsoussecteurs = [];

  $http.get('/gestion_ventes/api/secteur.php').then(function(response) {
	    $this.datasecteurs = response.data;
	    angular.forEach($this.datasecteurs, function(secteurss) {	
	        if (secteurss.id_secteur == $stateParams.contactId) { 
	            $this.nomSecteur = secteurss.nom_secteur;
	        }
	      })
	      
	  
	  })
	  
	    $http.get('/gestion_ventes/api//sous_secteur.php').then(function(response) {
	      $this.datasoussecteurs = response.data;
	      angular.forEach($this.datasoussecteurs, function(soussecteurss) {
	          if (soussecteurss.id_secteur == $stateParams.contactId) {
	            $this.soussecteurse.push(soussecteurss.nom_sous_secteur);
	          }
	          $this.allsoussecteurs.push(soussecteurss.nom_sous_secteur);
	      })
	    })



  // console.log($this.sousprojetsArray);
}

app.controller('detailsSecController', detailsSecController);
