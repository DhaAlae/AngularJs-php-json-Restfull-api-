var app = angular.module('app');

var detailsClientController = function($http, $stateParams, dataclients) {
  var $this = this;

  $this.clientsObj = {};
  $this.dirigeantsArray = [];


  // FETCH ALL CLIENTS **********************************
    $this.clients = dataclients;
    // FETCH SOUSPROJETS APPARTENANT AU PROJET
    angular.forEach($this.clients, function(client) {
      if (client.id_client == $stateParams.id) {
        $this.clientsObj = {
          "name": client.raison_social,
          "email": client.email,
          "tel": client.tel,
          "ville": client.ville
        }
      }
    })

  $http.get("/gestion_ventes/api/client.php").then(function(response) {
    $this.clients = response.data;

    angular.forEach($this.clients, function(client) {
      if (client.id_client == $stateParams.id) {
          $this.raisonSocial = client.raison_social;
          $this.email = client.email;
          $this.tel = client.tel;
          $this.chiffreA = client.chiffre_affaire;
          $this.fax = client.fax;
          $this.pays = client.pays_origin;
          $this.ville = client.ville;
          $this.logo = client.logo;
          $this.site = client.site_web;
          $this.adress = client.adress_postal;
          $this.employe = client.nombre_employe;

           angular.forEach($this.clients, function(cl) {
               if (client.rc_appartenance == cl.id_client) {
                    $this.rcApp = cl.raison_social;
                            }
                          })

           
      }
    })

  })


}

app.controller('detailsClientController', detailsClientController);
