var app = angular.module('app');

var ajoutSecController = function($http, $scope, $state) {
  var $this = this;

$scope.soussecteurs= [];
  
    $this.ajoutSecteur = function() {
      $this.data = {
        "nom_secteur" : $scope.nomSecteur,
        "list_sous_secteur" : $scope.soussecteurs
      }
      $http({
        method: 'POST',
        url: '/gestion_ventes/api/addsecteur.php',
        data: $this.data,
        headers: {'Content-Type': 'application/json'}
    }).then(function(responce) {
    $state.go("secteurs", {}, {reload: true});
    });
    }
    }
    app.controller('ajoutSecController', ajoutSecController);
