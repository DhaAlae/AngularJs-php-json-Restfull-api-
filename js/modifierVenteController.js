var app = angular.module('app');

var modifierVenteController = function($http, $stateParams,$state, $filter) {
    var $this = this;

      $http.get('/gestion_ventes/api/client.php').then(function(response) {
           $this.clients = response.data;
        })

    $http.get('/gestion_ventes/api/vente.php').then(function(response) {
        $this.achats = response.data;



        angular.forEach($this.achats, function(achat) {
            if (achat.id_lot == $stateParams.id) {
                 $this.montant = parseInt(achat.montant);  
                $this.dateac  =  new Date(achat.data_acquisition);
                $this.delaival =  parseInt(achat.delai_valorisation);
                $this.prixunitaire = parseInt(achat.prix_unitaire);
                $this.zoneFranche = achat.zone_franche;
                $this.invest = parseInt(achat.inverstissement);
                $this.commerce = achat.nom_commercial;
                $this.nombreEmploye = parseInt(achat.nombre_enmpoloye);
                $this.date_contract = new Date(achat.date_contract);
                $this.valoriser = achat.valoriser;
                $this.idVente = achat.id_vente_achat;
                $this.clientvend = achat.id_client;

                angular.forEach($this.clients, function(client) {
                  if (client.id_client == achat.id_client)
                 $this.clientvend = {
                  "adress_postal":client.adress_postal,
                  "chiffre_affaire":client.chiffre_affaire,
                  "id_client":client.id_client,
                  "nombre_employe":client.nombre_employe,
                  "raison_social":client.raison_social,
                  "rc_appartenance":client.rc_appartenance
                }

                })
                          }
        })
    })

    

    $this.modifierVente = function() {

        $this.data = {
          "id_client" : $this.clientvend.id_client,
          "montant" : $this.montant,
          "data_acquisition" : $filter('date')($this.dateac,'dd/MM/yyyy'),
          "delai_valorisation" : $this.delaival,
          "prix_unitaire" : $this.prixunitaire,
          "zone_franche" : $this.zoneFranche,
          "inverstissement" : $this.invest,
          "nom_commercial" : $this.commerce,
          "nombre_enmploye" : $this.nombreEmploye,
          "id_lot" : $stateParams.id,
          "date_contract" : $filter('date')($this.date_contract, "dd/MM/yyyy"),
          "valoriser" : $this.valoriser,
          "id_vente_achat" : $this.idVente

        }



        $http({
            method: 'PUT',
            url: '/gestion_ventes/api/updatevente.php',
            data: $this.data,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function(response) {
          $state.go("achats.lots", {}, {reload: true});
        })
    }

}

app.controller('modifierVenteController', modifierVenteController);
