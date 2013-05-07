
App.InsuredsRoute = Ember.Route.extend({
  model: function() {
    return App.Insured.find();
  }

});
