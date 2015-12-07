 var app = angular.module('app');

var modifierController = function($http, $stateParams, $location, $scope, $state) {
  var $this = this;
  $this.dataSecteurs= [];
  $this.secteurse = [];
  $this.allsecteurs = [];
  $this.allsousprojets = [];
  $this.sousprojets = [];

 // FETCH ALL SOUSPROJETS **********************************
 $http.get('/gestion_ventes/api/project.php').then(function(response) {
    $this.projects = response.data;
    angular.forEach($this.projects, function(project) {
      if (project.id_project == $stateParams.contactId) { 
          $this.nomProject = project.nom_project;
      }
    })
  })



 $http.get('/gestion_ventes/api/secteur.php').then(function(response) {

    $this.secteurs = response.data;
    angular.forEach($this.secteurs, function(secteur) {
      $this.allsecteurs.push({
          "id_secteur" : secteur.id_secteur, 
          "nom_secteur" : secteur.nom_secteur 
          });
    })
  })

  $http.get('/gestion_ventes/api/project_secteur.php').then(function(response) {
    $this.project_secteur = response.data;
    angular.forEach($this.project_secteur, function(ps) {
      if (ps.id_project == $stateParams.contactId) {

        angular.forEach($this.secteurs, function(secteur) {
        if (ps.id_secteur ==  secteur.id_secteur) {
          $this.secteurse.push({
              "id_secteur" : secteur.id_secteur, 
              "nom_secteur" : secteur.nom_secteur 
              }
          );
        }
      })
      }
    })
  })

 $this.modifier = function() {
    for (var i=0; i< $this.secteurse.length; i++) {
    $this.dataSecteurs.push($this.secteurse[i].id_secteur);
  }
  $this.data = {
    "id_project": $stateParams.contactId,
    "nom_project" : $this.nomProject,
    "id_secteur" : $this.dataSecteurs
  }
  
 
  
    $http({
        method: 'POST',
        url: '/gestion_ventes/api/updateproject.php',
        data: $this.data,
        headers: {'Content-Type': 'application/json'}
    }).then(function(response){
      $scope.success = true;
      $state.go("projets", {}, {reload: true});
    })
  }


}

app.controller('modifierController', modifierController);
