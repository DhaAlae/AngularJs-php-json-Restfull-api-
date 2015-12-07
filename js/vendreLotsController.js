var app = angular.module('app');

var vendreLotsController = function($http, $stateParams, $state, $filter) {
    var $this = this;
    $this.string;
    $http.get('/gestion_ventes/api/lot.php').then(function(response) {
        $this.lots = response.data;

        angular.forEach($this.lots, function(lot) {
            if (lot.id_lot == $stateParams.id) {
                $this.lotName = lot.nom_lot;
            }
        })
    })

    $http.get('/gestion_ventes/api/client.php').then(function(response) {
        $this.clients = response.data;
    })

      $this.string = $filter('date')($this.date_contract, "dd/MM/yyyy");


    $this.vendreLot = function() {

        $this.data = {
          "id_client" : $this.clientvend.id_client,
          "montant" : $this.montant,
          "data_acquisition" : $filter('date')($this.dateac, "dd/MM/yyyy"),
          "delai_valorisation" : $this.delaival,
          "prix_unitaire" : $this.prixunitaire,
          "zone_franche" : $this.zoneFranche,
          "inverstissement" : $this.invest,
          "nom_commercial" : $this.commerce,
          "nombre_enmploye" : $this.nombreEmploye,
          "id_lot" : $stateParams.id,
          "date_contract" :  $filter('date')($this.date_contract, "dd/MM/yyyy"),
          "valoriser" : "n"
        }



        $http({
            method: 'POST',
            url: '/gestion_ventes/api/addvente.php',
            data: $this.data,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function(response) {
           $state.go("achats.lots", {}, {reload: true});
        })
    }

}

app.controller('vendreLotsController', vendreLotsController);
