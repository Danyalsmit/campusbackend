const express = require("express");
const cors = require("cors");
const router = require("./Routes/index.js")
const mongoose = require ("./db/index.js")


const app = express();
const port = process.env.PORT || 8000;
app.use(cors());

const db = mongoose.connection;
db.on("error", console.error.bind(console,"connection error:") );
db.once("open",function(){
  console.log("db connected");
})


app.use(express.json());
app.use("/api",router);



app.listen(port, () => {
  console.log(`Server is running on port `);
});