const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chapterSchema = new Schema({
  chapter_name: String,
  chapter_number: Number,
  responses: [String]
});

const chapterModel = mongoose.model("chapter", chapterSchema);

module.exports = chapterModel;
