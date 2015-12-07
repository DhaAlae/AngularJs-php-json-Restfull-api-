var app = angular.module("app");

var modifierDirigeantController = function($http, $stateParams, $scope, $state) {
  var $this = this;
  $this.dirigeants = {};

        $http.get("/gestion_ventes/api/client.php").then(function(response){
          $this.clients = response.data;
           })
  // FETCH THE NAMEPROJET WITH ID_STATE **********************************
  $http.get('/gestion_ventes/api/dirigent.php').then(function(response) {
    $this.dirigeants = response.data;
    angular.forEach($this.dirigeants, function(dirigeant) {
      if (dirigeant.id_dirigent == $stateParams.id) {
       
          $scope.nom = dirigeant.nom;
          $scope.prenom = dirigeant.prenom;
          $scope.email = dirigeant.email;
          $scope.fonction= dirigeant.fonction;
          $scope.fax= dirigeant.fax;
          $scope.qualite= dirigeant.qualite;
          $scope.tel= dirigeant.tel;


           angular.forEach($this.clients, function(client) {
            if(client.id_client == dirigeant.id_client) {
              $this.selectedClient = { 
                "adress_postal":client.adress_postal,
                "chiffre_affaire":client.chiffre_affaire,
                "id_client":client.id_client,
                "nombre_employe":client.nombre_employe,
                "raison_social":client.raison_social,
                "rc_appartenance":client.rc_appartenance
              }
            }
           
          })
        
      }
    })
  })

  $this.modifierdirigeant = function() {
      
   $this.data = {
    "id_dirigent" : $stateParams.id,
    "email": $scope.email,
    "fax": $scope.fax,
    "fonction": $scope.fonction,
    "id_client": $this.selectedClient.id_client,
    "nom": $scope.nom,
    "prenom": $scope.prenom,
    "qualite": $scope.qualite,
    "tel": $scope.tel
  }
   
    
      $http({
          method: 'PUT',
          url: '/gestion_ventes/api/updatedirigent.php',
          data: $this.data,
          headers: {'Content-Type': 'application/json'}
      }).then(function(response){
        $state.go("achats.dirigeants", {}, {reload: true});
      })
    }
       

}
app.controller("modifierDirigeantController", modifierDirigeantController);
