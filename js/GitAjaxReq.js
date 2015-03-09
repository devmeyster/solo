var results = requestJSON("https://api.github.com/repos/jashkenas/backbone/issues/events?page=3&per_page=100", function(json){
  obj = json;
  console.log(json);
  return json;
});

var results = requestJSON("https://api.github.com/repos/jashkenas/backbone/pulls?state=all", function(json){
  obj = json;
  console.log(json);
  return json;
});

var results = requestJSON("https://api.github.com/repos/jashkenas/backbone/pulls?state=all&page=3&per_page=100", function(json){
  obj = json;
  console.log(json);
  return json;
});

for (var i = 0; i<obj.length; i++){
   if(obj[i]['merged_at'] !== null){
   res.push(obj[i]);
   count++;
}


}