app.directive("quoteDirective", function(){
  // just return the DDO Directive Definition Object
  return {
    restrict: 'E',
    scope{
      quoteObject: '=',
      restrictQuote:'&'
    },
    link: function(scope, element, attrs){
      console.log(scope.getQuote);
    },
    templateUrl: 'quoteDirective.html'
  };
});
