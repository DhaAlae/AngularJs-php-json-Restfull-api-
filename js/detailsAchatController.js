var app = angular.module('app');

var detailsAchatController = function($http, $location, $scope, $stateParams, $filter) {

    var $this = this;

    // Lot Data 
    $http.get('/gestion_ventes/api/lot.php').then(function(response) {
            $this.lots = response.data;
            angular.forEach($this.lots, function(lot) {
                if(lot.id_lot == $stateParams.id){
                	$this.nom_lot = lot.nom_lot;
                } 
                          })
        })


    // Client Data

    $http.get('/gestion_ventes/api/client.php').then(function(response) {
           $this.clients = response.data;
        })
        // vente_achat Data
    $http.get('/gestion_ventes/api/vente.php').then(function(response) {
        $this.achats = response.data;

          angular.forEach($this.achats, function(achat) {
            if (achat.id_lot == $stateParams.id) {
	                $this.montant = parseInt(achat.montant);  
	                $this.dateac  = $filter('date')(achat.data_acquisition, 'dd/MM/yyyy');
	                $this.delaival = parseInt(achat.delai_valorisation);
	                $this.prixunitaire = parseInt(achat.prix_unitaire);
	                $this.zoneFranche = achat.zone_franche;
	                $this.invest = parseInt(achat.inverstissement);
	                $this.commerce = achat.nom_commercial;
	                $this.nombreEmploye = achat.nombre_enmpoloye;
	                $this.date_contract = $filter('date')(achat.date_contract, 'dd/MM/yyyy');
	                $this.valoriser = achat.valoriser;
	                $this.idVente = achat.id_vente_achat;
                
                angular.forEach($this.clients, function(client) {
                  if (client.id_client == achat.id_client){
                  	$this.clientvend = client.raison_social;
                  }
                

                })

            }
        })

 


    })
  








  


   
}

app.controller('detailsAchatController', detailsAchatController);
