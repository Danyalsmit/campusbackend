

 const mongoose = require("mongoose");
 const {Schema }=mongoose;


const userSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
 
  email: {
    type: Schema.Types.String,
    required: true,
    unique: true,
  },
  password: {
    type: Schema.Types.String,
    required: true,
  },
  category: {
    type: Schema.Types.String,
    required: false,
  },
  option: {
    type: Schema.Types.String,
    required: false,
  }
});

const User = mongoose.model('student', userSchema);
module.exports = User;
