App.InsuredsRoute = Ember.Route.extend({
  model: function(params) {
    //console.log(JSON.stringify(params, null, 4));
    return App.Insured.find(params.insured_id);
  },
});
