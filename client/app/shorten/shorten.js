angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function(url){
    Links.add(url).then(function(link){
      $scope.link = link;
    })
  };

});
