const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const Schema = mongoose.Schema;

const UserSchema =  new Schema({
  name: String,
  email: String,
  birth: String,
  password: String,
  isAdmin: {
    type: Boolean,
    default: false
  },
  listSkils: {
    type: Array,
    default: []
  }
});

UserSchema.methods.encryptPassword = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};


module.exports = mongoose.model('User', UserSchema);