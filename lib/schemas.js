Schema = {};

Schema.UserProfileBank = new SimpleSchema ({
  name: {
    type: String,
  },
  iban: {
    type: String,
    max: 24,
    min: 24,
    regEx: /^[a-zA-Z]{2}[0-9]{2}[a-zA-Z0-9]{4}[0-9]{7}([a-zA-Z0-9]?){0,16}$/
  }
})

Schema.UserProfileUniqueNumber = new SimpleSchema ({
  name: {
    type: String,
  },
  value: {
    type: Number,
  }
});

Schema.UserProfileAddress = new SimpleSchema ({
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
  },
  city: {
    type: String,
    optional: false
  },
  state: {
    type: String,
    optional: false
  },
  country: {
    type: String,
    optional: false
  },
  postalCode: {
    type: String,
    optional: false
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
      type: Schema.UserProfileAddress,
      optional: false,
    },
    age: {
      type: Number,
    },
    uniqueId: {
      type: Schema.UserProfileUniqueNumber,
      optional: false
    },
    bank: {
      type: Schema.UserProfileBank,
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
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean
    },
    createdAt: {
      type: Date
    },
    profile: {
      type: Schema.UserProfile,
      optional: true
    },
    services: {
      type: Object,
      blackbox: true,
      optional: true
    }
});

Meteor.users.attachSchema(Schema.User);
