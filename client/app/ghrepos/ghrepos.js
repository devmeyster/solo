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
