/*global Ember */

(function (window) {
  var App = window.App = Ember.Application.create({
    LOG_TRANSITIONS: true,
  });

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


})(this);
