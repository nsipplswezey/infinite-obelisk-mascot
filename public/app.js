var app = angular.module('app',['infinite-scroll']);

app.controller('DemoController', function($scope){

  //init images function creates and returns an array of integers
  var initImages = function(numberOfImages){
    var result = [];
    for (var i = 1; i < numberOfImages; i++){
      result.push(i);
    }
    return result;
  }

  $scope.images = initImages(10);


  //Load more, sets last to be the last integer of $scope.images
  //And then it creates 8 new images and pushes them to the array
  $scope.loadMore = function(){
    var last = $scope.images[$scope.images.length - 1];
    for(var i = 1; i <= 8; i++){
      $scope.images.push(last+i)
    }
  };
});
