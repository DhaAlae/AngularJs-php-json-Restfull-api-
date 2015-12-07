angular.module('metismenu', [])
       .directive('metismenu', function() {

         return {
           restrict: 'A',
           link: function(scope, el, atts) {
              el.metisMenu();
           }
         };

       })
