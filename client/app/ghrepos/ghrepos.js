angular.module('shortly.ghrepos', [])

.controller('GhreposController', function ($scope, $location, Git) {
  $scope.data = {};
  $scope.getLinks = function () {
    Git.get().then(function(links) {
      $scope.data.links = links;
    });
  };
  $scope.addLink = function(url){
    // console.log(url);
    Git.add(url).then(function(link){
      $scope.link = link;
    })
  };
  $scope.getLinks();
});


/*
.controller('GhreposController', function ($scope, Git) {
  $scope.data = {};
  $scope.getLinks = function () {
    Git.get().then(function(links) {
      $scope.data.links = links;
    });
  };
  $scope.getLinks();
});

 */