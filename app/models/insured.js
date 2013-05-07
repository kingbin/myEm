App.Insured  = DS.Model.extend({
//  id:           DS.attr('number'),
  firstName:    DS.attr('string'),
  lastName:     DS.attr('string'),
  email:        DS.attr('string'),
  notes:        DS.attr('string'),
  dob:          DS.attr('date'),
//  phoneNumbers: DS.hasMany('App.PhoneNumber'),

  fullName: function() {
    var firstName = this.get('firstName'),
        lastName = this.get('lastName');

    if (!firstName && !lastName) {
      if (Ember.isNone(this.get('id'))) {
        return '(New Insured)';
      } else {
        return '(No Name)';
      }
    }

    if (firstName === undefined) firstName = '';
    if (lastName === undefined) lastName = '';

    return firstName + ' ' + lastName;
  }.property('firstName', 'lastName'),

  gravatar: function() {
    var email = this.get('email');
    if (!email) email = '';
    return 'http://www.gravatar.com/avatar/' + MD5(email);
  }.property('email'),

  prettydob: function() {
      var d = this.get('dob');
      return moment(d).format('MMMM Do YYYY');
  }.property('dob')
});


App.Insured.FIXTURES = [{
  id: 1,
  firstName: "Chris",
  lastName: "Blazek",
  email: "chris.blazek@gmail.com",
  notes: "coder [github repo](https://github.com/kingbin \"github account\")",
  dob: new Date('3-14-1976')},
  {
    id: 2,
    firstName: "James",
    lastName: "Felts",
    email: "james.felt@gmail.com",
    notes: "coder",
    dob: new Date('1-1-1976')
  }]


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

