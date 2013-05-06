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
      this.route('about');
      this.route('agents');
      this.route('insureds');
      this.route('tweets');
  });

  App.IndexRoute = Ember.Route.extend({
    model: function () {
      return ['gold lion', 'unicorn', 'narwhal'];
    }
  });

App = Em.Application.extend({rootElement: 'tweets'});


})(this);
