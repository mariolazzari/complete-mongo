const mongoose = require("mongoose");

mongoose.connect("mongodb://localhist/users_test");
mongoose.connection
  .once("open", () => console.log("Good to go."))
  .on("error", error => console.warn("Warning", error));
