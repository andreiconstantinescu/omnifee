Accounts.onCreateUser(function(options, user) {
  // Custom user fields
  user.vatSwitch = options.vatSwitch ? options.vatSwitch : '';
  user.invoices = options.invoices ? options.invoices : '';
  user.tickets = options.tickets ? options.tickets : '';
  user.package = options.package ? options.package : '';
  user.receipts =  options.receipts ? options.receipts : '';
  user.bracelets = options.bracelets ? options.bracelets : '';
  user.profile = options.profile ? options.profile : '';

  return user;
});

if (Meteor.users.find().count() === 0) {
  console.log('Populating DB with 1 user.');
  Accounts.createUser({
    username: 'dummy112',
    password: 'parola',
    email: 'dummy@dummyemail.com',
    vatSwitch: true,
    profile: {
      name: 'DummyName',
      surname: 'DummySurname',
      birthDate: 'Wed Jan 01 2014 00:00:00 GMT-0500 (EST)',
      address: {
        streetName: 'Sunset Blvd',
        streetNumber: '661C',
        city: 'Los Angels',
        state: 'California',
        country: 'USA',
        postalCode: '90210',
        extra: 'Entrace access code is 88.'
      },
      uniqueId: {
        name: 'NIM',
        value: 1122334455
      },
      bank: {
        name: 'ING Bank',
        iban: 'RO13UGEC3138200132004914'
      }
    },
    invoices: [
      {
        logo: 'logo/icon/path',
        number: 69,
        date: 'Wed Jan 01 2014 00:00:00 GMT-0500 (EST)',
        billTo: [
          {
            companyName: 'Money Inc.',
            uniqueNumber: {
              name: 'XXX',
              value: 123456789
            },
            bank: {
              name: 'ING B',
              iban: 'RO13UGEC3138200132004914'
            },
          }
        ],
        dueDate: 'Wed Jan 01 2014 00:00:00 GMT-0500 (EST)',
        currency: 'RON',
        language: 'en-US',
        notes: 'Promotion 50% off added.',
        items: [
          {
            description: 'This is a item description',
            measurementUnit: 'Words',
            quatity: 5000,
            price: '12.99'
          }
        ]
      }
    ],
    tickets: [
      {
        name: 'My cool event',
        logo: 'path/to/tickets/icons',
        timeOfEvent: 'Wed Jan 01 2014 00:00:00 GMT-0500 (EST)',
        venue: {
          name: 'The Dome',
          address: {
            streetName: 'Sunset Blvd',
            streetNumber: '999',
            city: 'Los Angels',
            extra: 'Tickets must be scanned at the entrance.'
          }
        },
        currency: 'EUR',
        price: '22.4',
        category: {
          type: 'Golden Circle',
          row: '59B',
          seat: '34'
        },
        organizer: {
          name: 'B24FUN',
          logo: 'path/to/logo'
        }
      }
    ],
    package: {
      startDate: 'Wed Jan 01 2014 00:00:00 GMT-0500 (EST)',
      endDate: 'Wed Jan 01 2014 00:00:00 GMT-0500 (EST)',
      name: 'Starter Pack',
      quantity: {
        remInvoices: 22,
        remReceipts: 19,
        remTickets: 9,
        remBracelets: 0
      },
      invoices: true,
      receipts: true,
      tickets: true,
      bracelets: false,
      logo: 'path/to/logo'
    }
  });
}
