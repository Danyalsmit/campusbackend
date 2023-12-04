const mongoose = require("mongoose");

mongoose.connect(`mongodb+srv://danyal:danyal@dk.6zdlkec.mongodb.net/SHOP?
/retryWrites=true&w=majority`);

module.exports = mongoose;