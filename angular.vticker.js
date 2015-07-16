/* --- Made by Vikrant Mahajan and licensed under MIT license --- */

var app = angular.module('vticker', []);
app.directive('ticker', function(){
  return {
    restrict: 'E',
    scope:{
      ticks:"="
    },
    template:"<ul><li data-ng-repeat='tick in ticks' ng-bind-html='tick|trust'></li></ul>",
    link: function(scope, element, attrs, autoCtrl){
      scope.$watch('ticks',function(val){
        if(val){
          jQuery(element).vTicker();
        }
      });
    }
  };
}).filter('trust', [
'$sce',
function($sce) {
  return function(value, type) {
    return $sce.trustAs(type || 'html', text);
  }
}
]);
