/*global Ember */

(function (window) {

  var BaseApp = Em.Application.extend({
      app_title: 'ARMtech Playground',
      contact: function() {
          if(this.get('link') !== '') {
              var html = '<a href="%@" target="_blank">%@</a>'
                         .fmt(this.get('link'), this.get('author'));
              return new Handlebars.SafeString(html);
          } else {
              return this.get('author');
          }
      }.property('author', 'link')
  });

  // Extensions - End

  var App = window.App = BaseApp.create({
      author: 'Chris Blazek',
      link: 'https://twitter.com/kingbin',
      LOG_TRANSITIONS: true,
  });


//  var App = window.App = Ember.Application.create({
//    LOG_TRANSITIONS: true,
//  });

  debug = Em.debug;

  App.Store = DS.Store.extend ({
    revision: 12,
    adapter: 'DS.FixtureAdapter'
  })

  App.Router.map(function() {
      this.resource('about');
      this.resource('agents');
      this.resource('insureds', function(){
        this.resource('insured', { path: ':insured_id'})
      });
      this.resource('tweets');
  });

  App.IndexRoute = Ember.Route.extend({
    model: function () {
      return ['gold lion', 'unicorn', 'narwhal'];
    }
  });

  App = Em.Application.extend({rootElement: 'tweets'});


  Ember.Handlebars.registerBoundHelper('prettyDate', function(date) {
    return moment(date).format('MMMM Do YYYY');
  });
  Ember.Handlebars.registerBoundHelper('fromToday', function(date) {
    return moment(date).fromNow();
  });

  var showdown = new Showdown.converter();
  Ember.Handlebars.registerBoundHelper('md', function(input) {
    return new Ember.Handlebars.SafeString(showdown.makeHtml(input));
  });

})(this);
