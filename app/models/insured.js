App.Insured  = DS.Model.extend({
  id:           DS.attr('number'),
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
  }.property('email')
});


App.Insured.FIXTURES = [{
  id: 1,
  firstName: "Chris",
  lastName: "Blazek",
  email: "chris.blazek@gmail.com",
  notes: "coder",
  dob: new Date('3-14-1976')
}]





