export {};
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PatientSchema = new Schema(
  {
    // This corresponds to our local store of people
    personId: { type: String, default: null },
    currentImages: [{ type: String }],
    correctImageAnswersInARow: { type: Number, default: 0 },
    location: { type: String, default: null },
    dateOfBirth: { type: String, default: null },
  },
  { versionKey: false }
);

module.exports = mongoose.model('Patient', PatientSchema);
