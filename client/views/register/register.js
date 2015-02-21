'use strict'

Template.register.events({
  'submit #register-form': function (event, tpl) {
    event.preventDefault();
    var name = tpl.find('#register-name').value;
    var surname = tpl.find('#register-surname').value;
    var username = tpl.find('#register-username').value;
    var password = tpl.find('#register-password').value;
    var email = tpl.find('#register-email').value;

    Accounts.createUser({
      name: name,
      surname: surname,
      password: password,
      email: email
    }, function (err) {
      if (err) {
        if (err.message === 'Email already exists. [403]') {
          console.log('The email is already used')
        } else {
          console.log('There has been an error. Check the fields.');
        }
      } else {
        console.log('Registration successful!');
      }
    });

    return false;
  }
});
