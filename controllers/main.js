exports.TestFunc = function(req, res){
  //res.render('index', { title: 'Express Website', page: 'home' });

  console.log("You clicked the button");
  res.render('page2');

};