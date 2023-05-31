require("dotenv").config();
const express = require("express");
const connectdb = require("./database");
const Router = require("./routes");
const port = process.env.PORT || 4000;
const app = express();

app.use(express.urlencoded({ extended: true })); //buat parsing url encode
app.use(express.json());

connectdb();

app.use("/", Router);

app.listen(port, () => {
  console.log("Server is running at port ", port);
});
