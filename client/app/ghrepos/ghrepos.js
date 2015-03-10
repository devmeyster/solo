angular.module('shortly.ghrepos', [])

.controller('GhreposController', function ($scope, $location, Git) {
  $scope.links = [];

  $scope.addLink = function(url){
    // console.log(url);
    var counter = 1;
    Git.add(url).then(function(link){
      console.log("Response: ", link)
      $scope.links.push(link);
      console.log("scope links", $scope.links);
    })
  };
 
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