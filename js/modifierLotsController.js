var app = angular.module('app');

var modifierLotsController = function($http, $stateParams, $state) {
  var $this = this;
  $this.vendu = false;
  $this.allclients = [];
  var count = 0;
  var i;
  


  // console.log($this.lots);
$http.get('/gestion_ventes/api/lot.php').then(function(response) {
        $this.lots = response.data;
          angular.forEach($this.lots, function(lot) {
    // console.log(lot.id);

    if (lot.id_lot == $stateParams.id) {
      $this.name = lot.nom_lot;
      $this.superficie = lot.superficie;


    }
  })
    })



$this.modifier = function(){

  $this.data = {
    "id_lot" : $stateParams.id,
    "nom_lot" : $this.name,
    "superficie" : $this.superficie
  }



    $http({
        method: 'PUT',
        url: '/gestion_ventes/api/updatelot.php',
        data: $this.data,
        headers: {'Content-Type': 'application/json'}
    }).then(function(response){
      $state.go("achats.lots", {}, {reload: true});
    })
}

}

app.controller('modifierLotsController', modifierLotsController);
