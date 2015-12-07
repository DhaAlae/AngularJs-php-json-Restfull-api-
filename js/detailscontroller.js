var app = angular.module('app');

var detailsController = function($http, $stateParams) {
  var $this = this;
  $this.dataSecteurs= [];
  $this.secteurse = [];
  $this.allsecteurs = [];
  $this.allproject_secteur = [];
  $this.project_secteurs = [];

  // FETCH ALL SOUSPROJETS **********************************
  $http.get('/gestion_ventes/api/project.php').then(function(response) {
     $this.projects = response.data;
     angular.forEach($this.projects, function(project) {
       if (project.id_project == $stateParams.contactId) { 
           $this.nomProject = project.nom_project;
       }
     })
   })
   
   
  $http.get('/gestion_ventes/api/project_secteur.php').then(function(response) {
    $this.allproject_secteur = response.data;
    angular.forEach($this.allproject_secteur, function(ps) {
    	if (ps.id_project == $stateParams.contactId ) {
    		$this.project_secteurs.push(ps.id_secteur);
    	}
    })

   $http.get('/gestion_ventes/api/secteur.php').then(function(response) {

    $this.secteurs = response.data;
    angular.forEach($this.secteurs, function(secteur) {
      angular.forEach($this.project_secteurs , function(prs){
        if (secteur.id_secteur == prs) {
            $this.secteurse.push(secteur.nom_secteur);
            
          }
      })
      
      $this.allsecteurs.push(secteur.nom_secteur);
    })
  })
  })
  
}

app.controller('detailsController', detailsController);
