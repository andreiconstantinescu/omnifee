'use strict'

Template.login.events({
  'submit #login-form': function (event,tpl) {
    event.preventDefault();

    var username = tpl.find('#register-username').value;
    var password = tpl.find('#register-password').value;

    Meteor.loginWithPassword(username, password, function(err) {
        if (err) {
          console.log('These credentials are not valid.');
        } else {
          console.log('Welcome, ' + Meteor.user().profile.name);
        }
    });
  }
});
