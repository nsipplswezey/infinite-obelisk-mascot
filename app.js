var app = angular.module('app',['infinite-scroll']);

app.controller('DemoController', function($scope){
  var initImages = function(numberOfImages){
    var result = [];
    for (var i = 1; i < numberOfImages; i++){
      result.push(i);
    }
    return result;
  }

  $scope.images = initImages(8);

  $scope.loadMore = function(){
    var last = $scope.images[$scope.images.length - 1];
    for(var i = 1; i <= 50; i++){
      $scope.images.push(last+i)
    }
  };
});
