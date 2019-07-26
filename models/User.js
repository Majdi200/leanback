const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  interested_by: {
    type: String,
    enum: ["lean management", "six sigma", "supply chain"]
  },
  comment: String,
  role: { type: String, default: "Auditeur" },
  score: [
    {
      chapitre: Number,
      reponse: Number
    }
  ]
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
