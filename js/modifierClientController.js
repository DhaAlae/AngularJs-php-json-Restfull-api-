var app = angular.module('app');

var modifierClientController = function($http, $stateParams, $state) {
  var $this = this;

  $this.clientsObj = {};
  $this.dirigeantsArray = [];


  $http.get("/gestion_ventes/api/client.php").then(function(response) {
    $this.clients = response.data;

    	
		    angular.forEach($this.clients, function(client) {
		      if (client.id_client == $stateParams.id) {
					$this.raisonSocialm = client.raison_social;
					$this.emailm = client.email;
					$this.telm = client.tel;
					$this.chiffreAm = parseInt(client.chiffre_affaire);
					$this.faxm = client.fax;
					$this.paysm = client.pays_origin;
					$this.villem = client.ville;
					$this.logom = client.logo;
					$this.sitem = client.site_web;
					$this.adressm = parseInt(client.adresse_postal);
					$this.employem = parseInt(client.nombre_employe);

					angular.forEach($this.clients, function(cl) {	
						if(client.rc_appartenance == cl.id_client){
							$this.rcAppm = { 
						                "adress_postal":cl.adress_postal,
						                "chiffre_affaire":cl.chiffre_affaire,
						                "id_client":cl.id_client,
						                "nombre_employe":cl.nombre_employe,
						                "raison_social":cl.raison_social,
						                "rc_appartenance":cl.rc_appartenance
						              }
						}
					})

		      }
		    })

  })
  
  
  $this.modifier = function() {

  	if($this.rcAppm == undefined){
  		$this.data = {
			  	"id_client" : $stateParams.id ,
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
	        method: 'PUT',
	        url: '/gestion_ventes/api/updateclient.php',
	        data: $this.data,
	        headers: {'Content-Type': 'application/json'}
	    }).then(function(response){
	    	$state.go("achats.clients", {}, {reload: true});
	    })
  	} else {

  		$this.data = {
			  	"id_client" : $stateParams.id ,
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
	        method: 'PUT',
	        url: '/gestion_ventes/api/updateclient.php',
	        data: $this.data,
	        headers: {'Content-Type': 'application/json'}
	    }).then(function(response){
	    	$state.go("achats.clients", {}, {reload: true});
	    })

  	}
	    
	  
	  }
//	}
  

}

app.controller('modifierClientController', modifierClientController);
