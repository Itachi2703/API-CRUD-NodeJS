//Constantes
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const app = express();
const morgan = require("morgan");
//Settings

app.set("Port", 4000);
app.use(bodyparser.json())
//MiddleWares

app.use(morgan("combined"))

//Routes

app.use("/api", require("./routes/router"))

// Listen

mongoose.connect("mongodb://localhost:27017/Personal", { useUnifiedTopology: true }, () => {
    console.log("Connected!!")
})

app.listen(app.get("Port"), () => {
    console.log("Server run on " + app.get("Port"))
});

