/* --- Made by justgoscha and licensed under MIT license --- */

var app = angular.module('vticker', []);
app.directive('ticker', function(){
  return {
    restrict: 'E',
    scope:{
      ticks:"="
    },
    template:"<ul><li data-ng-repeat='tick in ticks'>{{tick}}</li></ul>"
    link: function(scope, element, attrs, autoCtrl){
      scope.$watch('ticks',function(val){
        if(val){
          jQuery(element).vTicker();
        }
      });
    }
  };
});
