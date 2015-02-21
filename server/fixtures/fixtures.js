if (Meteor.users.find().count() === 0) {
  console.log('Populating DB with 1 user.');
  Accounts.createUser({
    username: 'dummy112',
    email: 'dummy@dummyemail.com',
    profile: {
      name: 'DummyName',
      surname: 'DummySurname',
      address: {
        streetName: 'Sunset Blvd',
        streetNumber: '661C',
        city: 'Los Angels',
        state: 'California',
        country: 'USA',
        postalCode: '90210',
        extra: 'Entrace access code is 88.'
      },
      age: 29,
      uniqueId: {
        name: 'NIM',
        value: 1122334455
      },
      bank: {
        name: 'ING Bank',
        iban: 'RO13UGEC3138200132004914'
      }
    },
    password: 'parola',
  });
}
