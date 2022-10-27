const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: true,
  },
})

const exportUser = mongoose.model("registerUsersPost", postSchema);

module.exports = exportUser;