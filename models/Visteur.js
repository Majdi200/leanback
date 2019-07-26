const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const visiteurSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  Intrested_by: {
    type: String,
    enum: ["Lean Management", "Six Sigma", "Supply Chain"]
  },
  Comment: String,
  role: { type: String, default: "visiteur" }
});

const visitModel = mongoose.model("Visiteur", visiteurSchema);

module.exports = visitModel;
