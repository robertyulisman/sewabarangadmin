const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const { Schema } = mongoose;

const schema = new Schema({
  nama: { type: String, default: '' },
  password: { type: String, default: '' },
  email: { type: String, default: '' },
  image: { type: String, default: '' },
});

// generating a hash
schema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
schema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('Admin', schema);
