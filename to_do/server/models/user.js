const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: { type: String },
  email: { type: String },
  password: { type: String }
});

userSchema.pre('save', function(next) {
  var user = this;
  if (this.password) {
    bcrypt.hash(user.password, 10, (err, data) => {
      // if(err) res.send(err);
      user.password = data;
      next();
    });
  } else {
    next();
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
