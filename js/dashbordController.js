var app = angular.module('app');


var dashbordController = function($http, $location, $scope) {
    var array = [];
    var $this = this;
	$this.projectnames = [];

    $http.get('/gestion_ventes/api/project.php').then(function(response) {
            $this.projects = response.data;       
      })

    $http.get('/gestion_ventes/api/dash.php').then(function(response) {
            $this.dashbords = response.data; 

        angular.forEach($this.dashbords, function(dashbord){
          console.log(' id_project : ' + dashbord.id_project);
          if(dashbord.id_project == 0){
              $this.projectnames.push({
                'nom_project' : 'null'
              });
          } else {
            angular.forEach($this.projects, function(project){
              if(dashbord.id_project == project.id_project){
                  $this.projectnames.push({
                'nom_project' : project.nom_project
              });
              }
            })

          }



        })
            
      })

      

      




      angular.forEach($this.clients, function(cl) {

        if(cl.rc_appartenance == 0){
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



}

app.controller('dashbordController', dashbordController);
