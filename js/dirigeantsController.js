var app = angular.module('app');

var dirigeantsController = function($http, $location, $state, $window) {

  var $this = this;
  $this.clientnames = [];
  // DATA FOT PROJECTS
  $http.get('/gestion_ventes/api/dirigent.php').then(function(response) {
    $this.dirigeants = response.data;

    $http.get('/gestion_ventes/api/client.php').then(function(response) {
      $this.clients = response.data;

      angular.forEach($this.dirigeants, function(dirigeant) {

        angular.forEach($this.clients, function(client) {
          if (client.id_client == dirigeant.id_client) {
            $this.clientnames.push({
              "id" : client.id_client,
              "raison_social": client.raison_social
            });
          }
        })
      })
    })
  })
  

  $this.modifier = function() {
      angular.forEach($this.dirigeants, function(dirigeant) {
        if (dirigeant.check === true) {
          var id = dirigeant.id_dirigent;
          $location.path("achats/dirigeants/modifier/" + id);
        }

      })
    }

  $this.sup = function() {
	  var del = $window.confirm('Voulez vous vraiment supprimer ces records?');
	  	if(del){
      angular.forEach($this.dirigeants, function(dirigeant) {
        if (dirigeant.check === true) { 
         $this.data = {"id_dirigent": dirigeant.id_dirigent} ;
        $http({
       method: 'DELETE',
       url: '/gestion_ventes/api/deletedirigent.php',
       data: $this.data,
       headers: {'Content-Type': 'application/json'}
   }).then(function(RESPONSE){
     $state.go("achats.dirigeants", {}, {reload: true});
   })
      }

    })
	  	}
  }
    // HANDLE CHECKED LINES IN PROJECTS TABLE
    // $this.check = true;
  $this.checkall = function() {
    if ($this.master) {
      angular.forEach($this.dirigeants, function(dirigeant) {
        dirigeant.check = true;
      })
    } else {
      angular.forEach($this.dirigeants, function(dirigeant) {
        dirigeant.check = false;
      })
    }
  }


  // HANDLE ACTION DROPDOWN IN PROJECTS TABLE
  $this.plusone = function() {

    var count = 0;
    $this.voir = true;
    $this.delete = true;

    angular.forEach($this.dirigeants, function(dirigeant) {
      if (dirigeant.check) {
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

app.controller('dirigeantsController', dirigeantsController);
