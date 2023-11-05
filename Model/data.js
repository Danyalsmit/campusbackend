// const mongoose = require("mongoose")

// const TodoSchema = new mongoose.Schema({
    
//     user:String
    

// })
//  const TodoModel = mongoose.model("student",TodoSchema)
//  module.exports = TodoModel


const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String, // Change to String (not Schema.Types.String)
    required: true,
  },
  number: {
    type: Number, // Change to Number (not Schema.Types.Number)
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  
});

const User = mongoose.model('student', userSchema);
module.exports = User;
