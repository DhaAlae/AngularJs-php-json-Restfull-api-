var app = angular.module('app');

var ajoutLotsController = function($http, $scope, $state) {
  var $this = this;

  $http.get("/gestion_ventes/api/project.php").then(function(response){
    $this.projets = response.data;
    console.log($this.projets);
  })
  

$this.ajoutLots = function() {
  $this.data = {
    "id_project" : $scope.projet.id_project,
    "list_sous_project" : $scope.sousprojets,
    "superficie" : $this.superficie,
    "nom_lot" : $this.lotname,
      }
  $http({
    method: 'POST',
    url: '/gestion_ventes/api/addlot.php',
    data: $this.data,
    headers: {'Content-Type': 'application/json'}
}).then(function(data) {
  $state.go("achats.lots", {}, {reload: true});
});
}
}
app.controller('ajoutLotsController', ajoutLotsController);
