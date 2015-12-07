var app = angular.module('app');

var secteursController = function($http, $location, $scope, $state, $window) {

  var $this = this;
  $scope.datasecteurs=[];

    getResultsPage(1);

    $scope.pagination = {
        current: 1
    };

    $scope.pageChanged = function(newPage) {
        getResultsPage(newPage);
    };

  function getResultsPage(pageNumber) {

    $http.get('/gestion_ventes/api/secteur.php?page=' + pageNumber).then(function(response) {
      $this.datasecteurs= response.data;
      // console.log($this.datasecteurs.secteurs);
    })
  }
  // DATA FOT PROJECTS


$this.details= function() {
  angular.forEach($this.datasecteurs, function(secteur) {
    if (secteur.check === true) {
      var id = secteur.id_secteur;
       $location.path("/secteurs/details/"+id);
    }

  })
}

$this.supprimer = function() {
	var del = $window.confirm('Voulez vous vraiment supprimer ces records?');
  	if(del){
    angular.forEach($this.datasecteurs, function(secteur) {
      if (secteur.check === true) { 
         $this.data = {"id_secteur": secteur.id_secteur} ;
        $http({
       method: 'DELETE',
       url: '/gestion_ventes/api/deletesecteur.php',
       data: $this.data,
       headers: {'Content-Type': 'application/json'}
   }).then(function(RESPONSE){
	   $state.go("secteurs", {}, {reload: true});
   })
      }
    })
  	}
  }

$this.modifier= function() {
  angular.forEach($this.datasecteurs, function(secteur) {
    if (secteur.check === true) {
      var id = secteur.id_secteur;
       $location.path("/secteurs/modifier/"+id);
    }

  })
}
  // HANDLE CHECKED LINES IN PROJECTS TABLE
  // $this.check = true;
  $this.checkall = function() {
    if ($this.master) {
      angular.forEach($this.datasecteurs, function(secteur) {
        secteur.check = true;
      })
    } else {
      angular.forEach($this.datasecteurs, function(secteur) {
        secteur.check = false;
      })
    }
  }


  // HANDLE ACTION DROPDOWN IN PROJECTS TABLE
  $this.plusone = function() {

    var count = 0;
    $this.voir = true;
    $this.delete = true;

    angular.forEach($this.datasecteurs, function(secteur) {
      if (secteur.check) {
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

app.controller('secteursController', secteursController);
