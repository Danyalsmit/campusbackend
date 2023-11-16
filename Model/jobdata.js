const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  JobCategory	: {
    type: Schema.Types.String,
    required: true,
  },

  Education: {
    type: Schema.Types.String,
    required: true,
  },
  Experience: {
    type: Schema.Types.String,
    required: true,
  },
  StreetAddress: {
    type: Schema.Types.String,
    required: false,
  }
  
});

const jobs = mongoose.model("jobdata", userSchema);
module.exports = jobs;
