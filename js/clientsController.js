var app = angular.module('app');

var clientsController = function($http, $location, $state, $scope, $window) {

  var $this = this;
 $scope.deleted = false;
  $scope.success = false;
  $this.clientnames = [];
  $this.hasDirigeant = [];
  var count;
  
  $http.get("/gestion_ventes/api/client.php").then(function(response) {
	    $this.clients = response.data;
     
      angular.forEach($this.clients, function(cl) {

        if(cl.rc_appartenance == null){
            $this.clientnames.push({
                  "raison_social": "null"
                });
        } else {
           angular.forEach($this.clients, function(client) {
              if (cl.rc_appartenance == client.id_client) {
                $this.clientnames.push({
                  "id" : client.id_client,
                  "raison_social": client.raison_social
                });
          
              } 
            })
        }

    })




	  })



  angular.forEach($this.clients, function(client) {
      count = 0;
    angular.forEach($this.dirigeants, function(dirigeant) {
      if (client.id == dirigeant.id_client) {
        count++;
      }
    })
    if (count == 0) {
      $this.hasDirigeant.push(true);
    }else {
      $this.hasDirigeant.push(false);
    }
  })

  // DATA FOT PROJECTS
  

  $this.supprimer = function(){
	  
	  var del = $window.confirm('Voulez vous vraiment supprimer ces records?');
	  	if(del){
		     angular.forEach($this.clients, function(client) {
		      if (client.check === true) { 
		         $this.data = {"id_client": client.id_client} ;
		        $http({
		       method: 'DELETE',
		       url: '/gestion_ventes/api/deleteclient.php',
		       data: $this.data,
		       headers: {'Content-Type': 'application/json'}
		   }).then(function(){
		     $state.go($state.current, {}, {reload: true});
		     
		   })
		      }
		
		    })
	  }
  }
 


  $this.details = function() {
    angular.forEach($this.clients, function(client) {
      if (client.check === true) {
        var id = client.id_client;
        $location.path("achats/clients/details/" + id);
      }
    })
  }

  $this.modifier = function() {
      angular.forEach($this.clients, function(client) {
        if (client.check === true) {
          var id = client.id_client;
          $location.path("achats/clients/modifier/" + id);
        }

      })
    }
    // HANDLE CHECKED LINES IN PROJECTS TABLE
    // $this.check = true;
  $this.checkall = function() {
    if ($this.master) {
      angular.forEach($this.clients, function(client) {
        client.check = true;
      })
    } else {
      angular.forEach($this.clients, function(client) {
        client.check = false;
      })
    }
  }


  // HANDLE ACTION DROPDOWN IN PROJECTS TABLE
  $this.plusone = function() {

    var count = 0;
    $this.voir = true;
    $this.delete = true;

    angular.forEach($this.clients, function(client) {
      if (client.check) {
        count = count + 1;
      }
    })

    if (count === 1) {
      $this.voir = false;
      $this.delete = false;
    }

    if (count > 1) {
      $this.voir = true;
      $this.delete = false;
    }
  }
}

app.controller('clientsController', clientsController);
