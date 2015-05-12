var Link    = require('./linkModel.js'),
    Q       = require('q'),
    util    = require('../config/utils.js'),
    Github = require('github-api'),
    _ = require('underscore-node');

var github = new Github({
  token: process.env.githubAPIDataGathering,
  auth: 'oauth'
});

module.exports = {
  newLink: function (req, res, next) {
    var url = req.body.url;
    link = url.split('/');
    var repoUser = link[link.length-2];
    var repoName = link[link.length-1];
    var gitData = {};

    var GHrepo = github.getRepo(repoUser, repoName);

    GHrepo.listPulls('closed', function(err, pulls){
      if(err){
        console.log(err);
        return;
      }
      var totalPulls = pulls.length;
      var results = [];

      _.each(pulls, function(pullRequest) {
        if(pullRequest['merged_at'] !== null){
           results.push(pullRequest);
         }
      });
      gitData['merged'] = Math.floor(results.length/totalPulls*100);
     
      GHrepo.show(function(err, json){
        if(err){
          console.log(err);
          return;
        }
        var name = util.capitalizeFirstLetter(json['name']);
        // console.log("Git repo: ", json)
        gitData['name'] = name;
        gitData['watched'] = json['subscribers_count'];
        gitData['stared'] = json['watchers'];
        gitData['forks'] = json['forks'];
        gitData['open_issues'] = json['open_issues'];
        gitData['html_url'] = json['html_url'];
        res.send(gitData);
      });
    });
  }
};
