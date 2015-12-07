var app = angular.module('app');

var projetsController = function($http, $location, $scope, $state, $window) {

  var $this = this;
  $scope.success = false;
  $scope.deleted = false;
    $scope.projets = [];
     $scope.totalProjets = 0;
     $scope.projetsPerPage = 4; // this should match however many results your API puts on one page
     getResultsPage(1);

     $scope.pagination = {
         current: 1
     };

     $scope.pageChanged = function(newPage) {
         getResultsPage(newPage);
     };

     function getResultsPage(pageNumber) {

             $http.get('/gestion_ventes/api/Project.php?page=' + pageNumber).then(function(result) {
            	 $this.projets = result.data;
                $scope.totalProjets = result.data.length;
             })
     }


  $this.details = function() {
    angular.forEach($this.projets, function(projet) {
      if (projet.check === true) {
        var id = projet.id_project;
        $location.path("/projets/details/" + id);
      }
    })
  };

  $this.modifier = function() {
      angular.forEach($this.projets, function(projet) {
        if (projet.check === true) {
          var id = projet.id_project;
          $location.path("/projets/modifier/" + id);
        }

      })
    }

  $this.supprimer = function() {
	  var del = $window.confirm('Voulez vous vraiment supprimer ces records?');
	  	if(del){
    angular.forEach($this.projets, function(projet) {
      if (projet.check === true) { 
         $this.data = {"id_project": projet.id_project} ;
        $http({
       method: 'DELETE',
       url: '/gestion_ventes/api/deleteproject.php',
       data: $this.data,
       headers: {'Content-Type': 'application/json'}
   }).then(function(RESPONSE){
     $state.go("projets", {}, {reload: true});
   })
      }

    })
	  	}
  }
    // HANDLE CHECKED LINES IN PROJECTS TABLE
    // $this.check = true;
  $this.checkall = function() {
    if ($this.master) {
      angular.forEach($this.projets, function(projet) {
        projet.check = true;
      })
    } else {
      angular.forEach($this.projets, function(projet) {
        projet.check = false;
      })
    }
  }


  // HANDLE ACTION DROPDOWN IN PROJECTS TABLE
  $this.plusone = function() {

    var count = 0;
    $this.voir = true;
    $this.delete = true;

    angular.forEach($this.projets, function(projet) {
      if (projet.check) {
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

app.controller('projetsController', projetsController);
