const app = angular.module("QuoteOfTheDay", []);

app.controller('QuoteController', ['$scope', 'quoteService',
  function($scope, quoteService){
    $scope.quote = {};
    $scope.loadQuote = function(){
      quoteService.getQuote().success(res =>$scope.quote=res);
    }
    $scope.loadQuote();
  }])




// app.controller("QuoteController", ['$scope', function($scope){
//   $scope.quote = {
// quote: "He has no need for faith who knows the uncreated, who has cut off rebirth, who has destroyed any opportunity for good or evil, and cast away all desire. He is indeed the ultimate man.",
// author: "Gautama Buddha",
// timeStamp: "2016-08-26T01:11:10.168Z",
// topic: "Equanimity"
// };
// }]);

app.factory('quoteService', ['$http', function($http){
  const theThing = {
    getQuote: function(){
      return $http.get('http://fvi-grad.com:4004/quote/');
    }
  };
  return theThing;
}]);
