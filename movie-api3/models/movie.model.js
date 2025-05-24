const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  releaseYear: Number,
  director: String
});

module.exports = mongoose.model('Movie', movieSchema);
