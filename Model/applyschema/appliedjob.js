const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: false,
  },

  id: {
    type: Schema.Types.ObjectId,
    required: false,
  },
  experience: {
    type: Schema.Types.String,
    required: false,
  },

  education: {
    type: Schema.Types.String,
    required: false,
  },
  category: {
    type: Schema.Types.String,
    required: false,
  },
  streetAddress: {
    type: Schema.Types.String,
    required: false,
  },
});

const Applied = mongoose.model('applied', userSchema);
module.exports = Applied;
