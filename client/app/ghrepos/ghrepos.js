angular.module('shortly.ghrepos', [])

.controller('GhreposController', function ($scope, $location, Git) {
  $scope.links = [{ merged: 36,
  name: 'd3',
  watched: 1155,
  stared: 35319,
  forks: 8841,
  open_issues: 218,
  html_url: 'https://github.com/mbostock/d3' },{ merged: 86,
  name: 'React',
  watched: 1199,
  stared: 17730,
  forks: 2317,
  open_issues: 512,
  html_url: 'https://github.com/facebook/react' },{ merged: 60,
  name: 'Backbone',
  watched: 1571,
  stared: 20998,
  forks: 4721,
  open_issues: 36,
  html_url: 'https://github.com/jashkenas/backbone' }];

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