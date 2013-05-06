App.TweetController = Ember.ArrayController.create({
  searchTerm: 'emberjs'
});

//var debug = Em.debug;
debug('http://search.twitter.com/search.json?callback=?&q=' + App.TweetController.get('searchTerm'));

//$.getJSON('http://search.twitter.com/search.json?callback=?&q=' + App.listController.get('searchTerm'), function(response){
//  debug('http://search.twitter.com/search.json?callback=?&q=' + App.listController.get('searchTerm'));
//  App.listController.set('content', response.results);
//});

