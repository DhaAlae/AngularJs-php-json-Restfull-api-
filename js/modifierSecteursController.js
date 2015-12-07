var app = angular.module('app');

var modifierSecteursController = function($http, $stateParams, $state, $scope) {
  var $this = this;
  var car = "dkjhfhd";
 
  $this.soussecteur = [];
  $this.allsoussecteurs = [];

  $http.get('/gestion_ventes/api/secteur.php').then(function(response) {
    $this.datasecteurs = response.data;
    angular.forEach($this.datasecteurs, function(secteurss) {	
        if (secteurss.id_secteur == $stateParams.contactId) { 
            $this.nomSecteur = secteurss.nom_secteur;
        }
      })
      
  
  })
  
    $http.get('/gestion_ventes/api/sous_secteur.php').then(function(response) {
      $this.datasoussecteurs = response.data;
      angular.forEach($this.datasoussecteurs, function(soussecteur) {
          if (soussecteur.id_secteur == $stateParams.contactId) {
            $this.soussecteur.push(soussecteur.nom_sous_secteur);
          }
          $this.allsoussecteurs.push(soussecteur.nom_sous_secteur);
      })
    })
  
  
 $this.modifier = function() {
    
  $this.data = {
    "id_secteur": $stateParams.contactId,
    "nom_secteur" : $this.nomSecteur,
    "list_sous_secteur" : $this.soussecteur
  }
  
 
  
    $http({
        method: 'POST',
        url: '/gestion_ventes/api/updatesecteur.php',
        data: $this.data,
        headers: {'Content-Type': 'application/json'}
    }).then(function(response){
      $scope.success = true;
      $state.go("secteurs", {}, {reload: true});
    })
  }
}

app.controller('modifierSecteursController', modifierSecteursController);
