var app = angular.module('app');

var lotsController = function($http, $location, $scope, $state, $window) {

    var $this = this;
//    var $this.achats=[];
    var arrayvendu = [];
    $http.get('/gestion_ventes/api/vente.php').then(function(response) {
            $this.achats = response.data;
            angular.forEach($this.achats, function(achat) {
                arrayvendu.push(achat.id_lot);
            })
        })
        // DATA FOR PROJECTS
    $http.get('/gestion_ventes/api/lot.php').then(function(response) {
        $this.lots = response.data;
    })
    $scope.itemvendu = function(item) {

        for (var i = 0; i <= arrayvendu.length; i++) {
            if (arrayvendu[i] == item) {
                return {
                    "warning": true
                }

            }
        }
    }
    $this.details = function() {
        angular.forEach($this.lots, function(lot) {
            if (lot.check === true) {
                var id = lot.id_lot;
                $location.path("achats/lots/details/" + id);
            }

        })
    }

    $this.modifierVente = function() {
        angular.forEach($this.lots, function(lot) {
            if (lot.check === true) {
                var id = lot.id_lot;
                $location.path("achats/lots/modifierVente/" + id);
            }

        })
    }


    $this.supprimerVente = function() {
    	var del = $window.confirm('Voulez vous vraiment supprimer ces records?');
	  	if(del){
        angular.forEach($this.lots, function(lot) {
            if (lot.check === true) {
               
               angular.forEach($this.achats, function(achat) {
            if (achat.id_lot == lot.id_lot) {
                $this.idVente = achat.id_vente_achat;
                    }
                })
               $this.data= {"id_vente_achat": $this.idVente}
                $http({
                    method: 'DELETE',
                    url: '/gestion_ventes/api/deletevente.php',
                    data: $this.data,
                    headers: {'Content-Type': 'application/json'}
                }).then(function(response){
                    $state.go("achats.lots", {}, {reload: true});
                })
            }

        })
	  	}
    }


      $this.supprimerLot = function() {
        var del = $window.confirm('Voulez vous vraiment supprimer ces records ?');
            if(del){
        angular.forEach($this.lots, function(lot) {
            if (lot.check === true) {
               $this.data= {"id_lot": lot.id_lot}
                $http({
                    method: 'DELETE',
                    url: '/gestion_ventes/api/deletelot.php',
                    data: $this.data,
                    headers: {'Content-Type': 'application/json'}
                }).then(function(response){
                    $state.go("achats.lots", {}, {reload: true});
                })
            }

        })
      }
    }

    $this.vendre = function() {
        angular.forEach($this.lots, function(lot) {
            if (lot.check === true) {
                var id = lot.id_lot;
                $location.path("achats/lots/vendre/" + id);
            }

        })
    }

    $this.modifier = function() {
            angular.forEach($this.lots, function(lot) {
                if (lot.check === true) {
                    var id = lot.id_lot;
                    $location.path("achats/lots/modifier/" + id);
                }

            })
        }
        // HANDLE CHECKED LINES IN PROJECTS TABLE
        // $this.check = true;
    $this.checkall = function() {
        if ($this.master) {
            angular.forEach($this.lots, function(lot) {
                lot.check = true;
            })
        } else {
            angular.forEach($this.lots, function(lot) {
                lot.check = false;
            })
        }
    }


    // HANDLE ACTION DROPDOWN IN PROJECTS TABLE
    $this.plusone = function() {

        var count = 0;
        var countvend = 0;

        $this.voir = true;
        $this.delete = true;
        $this.modvente = true;
        $this.supvente = true;
        $this.vendlot = true;

        angular.forEach($this.lots, function(lot) {
            if (lot.check) {
                count = count + 1;
                angular.forEach($this.achats, function(achat) {
                   if(achat.id_lot == lot.id_lot) {
                        $this.modvente = false;
                        $this.supvente = false;
                   }

                   if(achat.id_lot != lot.id_lot) {
                        countvend++;
                   }

                 })
               
            }

        })
        if(countvend == $this.achats.length) {$this.vendlot = false;}

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

app.controller('lotsController', lotsController);
