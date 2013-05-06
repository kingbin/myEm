/*global Ember */

(function (window) {
  var App = window.App = Ember.Application.create();

  App.Store = DS.Store.extend ({
    revision: 12,
    adapter: 'DS.FixtureAdapter'
  })

  App.Router.map(function() {
      this.route('about');
      this.route('agents');
  });

  App.IndexRoute = Ember.Route.extend({
    model: function () {
      return ['gold lion', 'unicorn', 'narwhal'];
    }
  });
})(this);
