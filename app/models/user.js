// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var userSchema = mongoose.Schema({

    local            : {
        email        : String,
        password     : String,
        name         : String,
        familyName   : String,
        cnp          : Number,
        address      : String,
        phone        : String,
        cardNumber         : String,
        cardExpiry         : String,
        cardCVC            : Number,
        balance            : Number,
        bill1              : String,
        bill2              : String,
        bill3              : String,
        bill4              : String,
        bill5              : String,
        bill6              : String,
        bill1Value              : Number,
        bill2Value             : Number,
        bill3Value             : Number,
        bill4Value             : Number,
        bill5Value             : Number,
        bill6Value             : Number,
        bill1Paid              : Boolean,
        bill2Paid              : Boolean,
        bill3Paid              : Boolean,
        bill4Paid              : Boolean,
        bill5Paid              : Boolean,
        bill6Paid              : Boolean
    },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    }

});

// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
