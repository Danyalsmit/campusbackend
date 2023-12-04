const express = require("express");
const cors = require("cors");
const router = require("./Routes/main")
const db = require("./db/connect/connecction.js")

const app = express();
const port = process.env.PORT || 8000;
app.use(cors());



app.use(express.json());
app.use("/api",router);



app.listen(port, () => {
  console.log(`Server is running on port `);
});