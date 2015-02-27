Schema = {};

Schema.BankTpl = new SimpleSchema ({
  name: {
    type: String,
    optional: true
  },
  iban: {
    type: String,
    max: 24,
    min: 24,
    regEx: /^[a-zA-Z]{2}[0-9]{2}[a-zA-Z0-9]{4}[0-9]{7}([a-zA-Z0-9]?){0,16}$/
  }
})

Schema.UniqueNumberTpl = new SimpleSchema ({
  name: {
    type: String,
  },
  value: {
    type: Number,
  }
});

Schema.AddressTpl = new SimpleSchema ({
  streetName: {
    type: String,
    optional: false
  },
  streetNumber: {
    type: String,
    optional: false
  },
  extra: {
    type: String,
    optional: true
  },
  city: {
    type: String,
    optional: false
  },
  state: {
    type: String,
    optional: true
  },
  country: {
    type: String,
    optional: true
  },
  postalCode: {
    type: String,
    optional: true
  },
});

Schema.UserProfile = new SimpleSchema({
  name: {
    type: String,
    optional: false
  },
  surname: {
    type: String,
    optional: false
  },
  address: {
    type: Schema.AddressTpl,
    optional: false,
  },
  birthDate: {
    type: Date,
    optional: true
  },
  phoneNumber: {
    type: Number,
    optional: true
  },
  uniqueId: {
    type: Schema.UniqueNumberTpl,
    optional: false
  },
  bank: {
    type: Schema.BankTpl,
  }
});

Schema.VenueTpl = new SimpleSchema ({
  name: {
    type: String,
    optional: true
  },
  address: {
    type: Schema.AddressTpl,
    optional: true
  }
});

Schema.TicketsCategoryTpl = new SimpleSchema ({
  type: {
    type: String,
    optional: true
  },
  row: {
    type: String,
    optional: true
  },
  seatNumber: {
    type: String,
    optional: true
  }
});

Schema.OrganizerTpl = new SimpleSchema({
  name: {
    type: String,
    optional: true
  },
  logo: {
    type: String,
    optional: true
  }
});

Schema.User = new SimpleSchema({
  username: {
      type: String,
      regEx: /^[a-z0-9A-Z_]{3,15}$/,
      optional: false
  },
  emails: {
      type: [Object],
      // this must be optional if you also use other login services like facebook,
      // but if you use only accounts-password, then it can be required
      optional: false
  },
  'emails.$.address': {
      type: String,
      regEx: SimpleSchema.RegEx.Email
  },
  'emails.$.verified': {
      type: Boolean
  },
  createdAt: {
    type: Date
  },
  vatSwitch: {
    type: Boolean,
    optional: false
  },
  profile: {
    type: Schema.UserProfile,
    optional: true
  },
  invoices: {
    type: [Object],
    optional: true
  },
  'invoices.$.logo': {
    type: String,
    optional: true
  },
  'invoices.$.number': {
    type: Number,
    optional: true
  },
  'invoices.$.dueDate': {
    type: Date,
    optional: true
  },
  'invoices.$.currency': {
    type: String,
    optional: true
  },
  'invoices.$.language': {
    type: String,
    optional: true
  },
  'invoices.$.notes': {
    type: String,
    optional: true
  },
  'invoices.$.billTo': {
    type: [Object],
    optional: true
  },
  'invoices.$.billTo.$.companyName': {
    type: String,
    optional: true
  },
  'invoices.$.billTo.$.companyAddress': {
    type: Schema.AddressTpl,
    optional: true
  },
  'invoices.$.billTo.$.uniqueNumber': {
    type: Schema.UniqueNumberTpl,
    optional: true
  },
  'invoices.$.billTo.$.bank': {
    type: Schema.BankTpl,
    optional: true
  },
  'invoices.$.items': {
    type:[Object],
    optional: true
  },
  'invoices.$.items.$.description': {
    type: String,
    optional: true
  },
  'invoices.$.items.$.measurementUnit': {
    type: String,
    optional: true
  },
  'invoices.$.items.$.quantity': {
    type: Number,
    optional: true
  },
  'invoices.$.items.$.price': {
    type: String,
    optional: true
  },
  tickets: {
    type: [Object],
    optional: true
  },
  'tickets.$.logo': {
    type: String,
    optional: true
  },
  'ticketa.$.name': {
    type: String,
    optional: true
  },
  'tickets.$.hash': {
    type: String,
    optional: true
  },
  'tickets.$.timeOfEvent': {
    type: Date,
    optional: true
  },
  'tickets.$.venue': {
    type: Schema.VenueTpl,
    optional: true
  },
  'tickets.$.price': {
    type: String,
    optional: true
  },
  'ticket.$.currency': {
    type: String,
    optional: true
  },
  'tickets.$.category' : {
    type: Schema.TicketsCategoryTpl,
    optional: true
  },
  'tickets.$.organizer': {
    type: Schema.OrganizerTpl,
    optional: true
  },
  package: {
    type: Object,
    optional: true
  }
  'package.$.startDate': {
    type: Date,
    optional: true
  },
  'package.$.endDate': {
    type: Date,
    optional: true
  },
  'package.$.name': {
    type: String,
    optional: true
  },
  'package.$.quantity': {
    type: Object
    optional: true
  }
  'package.$.quantity.$.remInvoices': {
    type: Number,
    optional: true
  },
  'package.$.quantity.$.remReceipts': {
    type: Number,
    optional: true
  },
  'package.$.quantity.$.remTickets': {
    type: Number,
    optional: true
  },
  'package.$.quantity.$.remBracelets': {
    type: Number,
    optional: true
  },
  invoices: {
    type: Boolean,
    optional: true
  },
  receipts: {
    type: Boolean,
    optional: true
  },
  tickets: {
    type: Boolean,
    optional: true
  },
  bracelets: {
    type: Boolean,
    optional: true
  }
  logo: {
    type: String,
    optional: true
  }
});
Meteor.users.attachSchema(Schema.User, {replace: true});
