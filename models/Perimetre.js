const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PermiSchema = new Schema({
  pername: String,
  startDate: Date,
  supportConsult: { type: String, enum: ["Yes", "No"] },
  auditeur: { type: Schema.Types.ObjectId, ref: "User" }
});

const perimModel = mongoose.model("Perimetre", permiSchema);

module.exports = perimModel;
