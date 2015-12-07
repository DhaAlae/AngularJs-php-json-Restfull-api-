var app = angular.module('app');

var ajoutClientController = function($http, $scope, $state) {
  var $this = this;
  
  $http.get("/gestion_ventes/api/client.php").then(function(response){
	  $this.clients = response.data;
	})

//   $http.get("data/data.json").then(function(response){
//     $this.pays = response.data;
//   })

// console.log($this.pays);
// var _date = $filter('date')(new Date(input), 'dd/MM/yyyy');
  


  $this.ajoutClient = function() {

    if($this.rcAppm == undefined){
        $this.data = {
          "raison_social" : $this.raisonSocialm,
          "email" : $this.emailm,
          "tel" : $this.telm,
          "chiffre_affaire" : $this.chiffreAm,
          "fax" : $this.faxm,
          "pays_origin" : $this.paysm,
          "ville" : $this.villem,
          "logo" : $this.logom,
          "site_web" : $this.sitem,
          "adress_postal" : $this.adressm,
          "nombre_employe" : $this.employem
    }
    
    
      $http({
          method: 'POST',
          url: '/gestion_ventes/api/addclient.php',
          data: $this.data,
          headers: {'Content-Type': 'application/json'}
      }).then(function(response){
        $state.go("achats.clients", {}, {reload: true});
      })

    } else {


      
 $this.data = {
          "raison_social" : $this.raisonSocialm,
          "email" : $this.emailm,
          "tel" : $this.telm,
          "chiffre_affaire" : $this.chiffreAm,
          "fax" : $this.faxm,
          "rc_appartenance" : $this.rcAppm.id_client,
          "pays_origin" : $this.paysm,
          "ville" : $this.villem,
          "logo" : $this.logom,
          "site_web" : $this.sitem,
          "adress_postal" : $this.adressm,
          "nombre_employe" : $this.employem
    }
    
    
      $http({
          method: 'POST',
          url: '/gestion_ventes/api/addclient.php',
          data: $this.data,
          headers: {'Content-Type': 'application/json'}
      }).then(function(response){
        $state.go("achats.clients", {}, {reload: true});
      })
      }
    }
}
app.controller('ajoutClientController', ajoutClientController);
