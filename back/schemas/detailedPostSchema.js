const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const detailedPostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  }

})

const exportPost = mongoose.model('typeDetailedPost', detailedPostSchema);

module.exports = exportPost;