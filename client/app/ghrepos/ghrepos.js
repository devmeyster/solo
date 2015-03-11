angular.module('shortly.ghrepos', [])

.controller('GhreposController', function ($scope, $location, Git) {
  $scope.links = [{ merged: 36,
  name: 'd3',
  watched: 1155,
  stared: 35319,
  forks: 8841,
  open_issues: 218,
  html_url: 'https://github.com/mbostock/d3' },
  { merged: 40,
  name: 'Ionic',
  watched: 830,
  stared: 14313,
  forks: 2032,
  open_issues: 314,
  html_url: 'https://github.com/driftyco/ionic' },
  { merged: 66,
  name: 'Bootstrap',
  watched: 4692,
  stared: 78534,
  forks: 30384,
  open_issues: 133,
  html_url: 'https://github.com/twbs/bootstrap' },
  { merged: 76,
  name: 'Knockout',
  watched: 568,
  stared: 6130,
  forks: 1032,
  open_issues: 385,
  html_url: 'https://github.com/knockout/knockout' },
  { merged: 60,
  name: 'Spine',
  watched: 115,
  stared: 2907,
  forks: 379,
  open_issues: 38,
  html_url: 'https://github.com/spine/spine' },
  { merged: 60,
  name: 'Backbone',
  watched: 1571,
  stared: 20999,
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
