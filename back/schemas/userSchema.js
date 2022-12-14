const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  secret: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: false,
    default: 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg'
  },
})

const exportUser = mongoose.model("registerUsers", userSchema);

module.exports = exportUser;