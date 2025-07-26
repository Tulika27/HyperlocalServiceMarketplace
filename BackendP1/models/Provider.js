const mongoose = require("mongoose");

const providerSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  servicesOffered: [{ type: String }],
  location: { type: String },
  availability: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model("Provider", providerSchema);
