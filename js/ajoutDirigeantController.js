var app = angular.module('app');

var ajoutDirigeantController = function($http, $scope, $state) {
  var $this = this;
$http.get("/gestion_ventes/api/client.php").then(function(response){
  $this.clients = response.data;
})

$this.ajoutDirigeant = function() {
  $this.data = {
    "email": $scope.email,
    "fax": $scope.fax,
    "fonction": $scope.fonction,
    "id_client": $scope.client.id_client,
    "nom": $scope.nom,
    "prenom": $scope.prenom,
    "qualite": $scope.qualite,
    "tel": $scope.tel
  }
  $http({
    method: 'POST',
    url: '/gestion_ventes/api/adddirigent.php',
    data: $this.data,
    headers: {'Content-Type': 'application/json'}
}).then(function(data) {
  $state.go("achats.dirigeants", {}, {reload: true});
});
}
}
app.controller('ajoutDirigeantController', ajoutDirigeantController);
