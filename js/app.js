
var app = angular.module('app', ['ui.router', 'metismenu', 'localytics.directives','angular-loading-bar', 'angularUtils.directives.dirPagination', 'bootstrap-tagsinput']);
app.config(['$stateProvider', '$urlRouterProvider', 'paginationTemplateProvider', function ($stateProvider, $urlRouterProvider, paginationTemplateProvider) {

  $urlRouterProvider.otherwise('/login');
   paginationTemplateProvider.setPath('views/pagination/pagination.html');
  $stateProvider



     .state("dashbord", {
      url: "/dashbord",
      templateUrl: "views/dashbord.html",
      controller: "dashbordController",
      controllerAs: "dash"
    })

    .state("projets", {
      url: "/projets",
      templateUrl: "views/projets.html",
      controller: "projetsController",
      controllerAs: "main"
    })

    .state("ajout", {
      parent: "projets",
      url: "/ajout",
      templateUrl: "views/ajout.html",
      controller: "ajoutController",
      controllerAs: "sec"
    })

    .state("details", {
      parent: "projets",
      url: "/details/:contactId",
      templateUrl: "views/details.html",
      controller: "detailsController",
      controllerAs: "det"
    })

    .state("modifier", {
      parent: "projets",
      url: "/modifier/:contactId",
      templateUrl: "views/modifier.html",
      controller: "modifierController",
      controllerAs: "mod"
    })
  // ********************* SOUS-SECTEURS STATES  ******************


  // ********************* SOUSPROJET STATES  ******************



  // ********************* SECTEURS STATES  ******************
    .state("secteurs", {
      url: "/secteurs",
      templateUrl: "views/secteurs.html",
      controller: "secteursController",
      controllerAs: "sec"
    })

    .state("modifiersec", {
      parent: "secteurs",
      url: "/modifier/:contactId",
      templateUrl: "views/modifierSecteurs.html",
      controller: "modifierSecteursController",
      controllerAs: "mod"
    })

    .state("ajoutsec", {
      parent: "secteurs",
      url: "/ajout",
      templateUrl: "views/ajoutsecteurs.html",
      controller: "ajoutSecController",
      controllerAs: "sec"
    })

    .state("detailssec", {
      parent: "secteurs",
      url: "/details/:contactId",
      templateUrl: "views/detailssecteurs.html",
      controller: "detailsSecController",
      controllerAs: "det"
    })


  // ********************* ACHATS  ******************
  // 
  
      .state("settings", {
      url: "/settings",
      templateUrl: "views/settings.html"
    })

    .state("settings.ajout", {
      url: "/ajout",
      templateUrl: "views/ajoutuser.html",
      controller: "userControler",
      controllerAs: "user"
    })


    .state("achats", {
      url: "/achats",
      templateUrl: "views/achats/achats.html",
      resolve: {
        data: function ($http) {
          return $http.get('data/achats/achats.json').then(function (response) {
            return response.data;
          })
        },
        dataclients: function ($http) {
          return $http.get('data/achats/clients.json').then(function (response) {
            return response.data;
          })
        },
        datadirigeants: function ($http) {
          return $http.get('data/achats/dirigeants.json').then(function (response) {
            return response.data;
          })
        },

      }

    })

    .state("achats.lots", {
      url: "/lots",
      templateUrl: "views/achats/lots.html",
      controller: "lotsController",
      controllerAs: "lot"
    })

    //details de l'achat controller

    .state("achats.lots.details", {
      url: "/details/:id",
      templateUrl: "views/achats/detailsAchat.html",
      controller: "detailsAchatController",
      controllerAs: "achat"
    })


    .state("achats.lots.modifier", {
      url: "/modifier/:id",
      templateUrl: "views/achats/modifierlots.html",
      controller: "modifierLotsController",
      controllerAs: "lot"
    })

    .state("achats.lots.vendre", {
      url: "/vendre/:id",
      templateUrl: "views/achats/vendre.html",
      controller: "vendreLotsController",
      controllerAs: "lot"
    })

    .state("achats.lots.modifierVente", {
      url: "/modifierVente/:id",
      templateUrl: "views/achats/modifierVente.html",
      controller: "modifierVenteController",
      controllerAs: "lot"
    })

    .state("achats.lots.ajout", {
      url: "/ajout",
      templateUrl: "views/achats/ajoutlots.html",
      controller: "ajoutLotsController",
      controllerAs: "lot"
    })

      // ********************* CLIENTS  ******************

      .state("achats.clients", {
        url: "/clients",
        templateUrl: "views/achats/clients.html",
        controller: "clientsController",
        controllerAs: "cl"
      })

      .state("achats.clients.ajout", {
        url: "/ajout",
        templateUrl: "views/achats/ajoutclient.html",
        controller: "ajoutClientController",
        controllerAs: "cl"
      })
      .state("achats.clients.details", {
        url: "/details/:id",
        templateUrl: "views/achats/detailsclient.html",
        controller: "detailsClientController",
        controllerAs: "cl"
      })

      .state("achats.clients.modifier", {
        url: "/modifier/:id",
        templateUrl: "views/achats/modifierclient.html",
        controller: "modifierClientController",
        controllerAs: "cl"
      })
      // Modifier + Details + delete

      // ********************* DIRIGEANTS  ******************

      .state("achats.dirigeants", {
        url: "/dirigeants",
        templateUrl: "views/achats/dirigeants.html",
        controller: "dirigeantsController",
        controllerAs: "dr"
      })

      .state("achats.dirigeants.ajout", {
        url: "/ajout",
        templateUrl: "views/achats/ajoutdirigeant.html",
        controller: "ajoutDirigeantController",
        controllerAs: "dr"
      })

      .state("achats.dirigeants.modifier", {
        url: "/modifier/:id",
        templateUrl: "views/achats/modifierdirigeant.html",
        controller: "modifierDirigeantController",
        controllerAs: "dr"
      })

      .state("achats.dirigeants.details", {
        url: "/details/:id",
        templateUrl: "views/achats/detailsdirigeant.html",
        controller: "detailsDirigeantController",
        controllerAs: "dr"
      })

  // .state("add", {
  //    // parent: "projets",
  //  url: "/add_projet",
  //  templateUrl: "views/add.html",
  //  controller: "addController"
  // })
  //
  // .state("companies", {
  //  url:"/companies",
  //  template:"<h3>Companies</h3>"
  // })
  //
  // .state("dashbord", {
  //  url:"/dashbord",
  //  template: "<h3><i class='fa fa-tachometer'></i> Dashboard</h3>"
  // })
    .state("login", {
      url: "/login",
      templateUrl: "views/login.html",
      controller: "loginController",
      controllerAs: "log"
    })


}]).run(function ($rootScope, $state) {
  $rootScope.$state = $state;
});
