const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const app = express();

mongoose.connect("mongodb+srv://admin:adminpass@cluster0.bthzv.mongodb.net/discordclone?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

const session = require("cookie-session");
app.use(express.static(`public`));
app.use(require("cookie-parser")());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require("cors")());
app.use(session({ name: "session", keys: [ "7dbd31b6-da18-4943-a98a-15bfa50b6e28" ]}));
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
	res.send("App api working.");
});

app.use("/api", require("./routes/api.js"));

app.use("*", (req, res) => {
	res.send("404");
})

app.listen(1006, () => console.log("API listening on 1006."));
